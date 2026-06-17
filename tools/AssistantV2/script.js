/*******************************************************************************
 * SABA Virtual Assistant - Main Script (Simplified & Clean Version)
 * 
 * This script powers the Saba Virtual Assistant for both English (EN) and 
 * French (FR) versions. 
 * 
 * Key Features:
 * - Bilingual support (EN/FR)
 * - NLP-based keyword matching
 * - Dynamic role/category detection from JSON data
 * - Chat conversation interface
 * - Question filtering by keyword and role
 * 
 * Data Source: qaData.js (contains all questions, answers, keywords, categories)
 ******************************************************************************/

// ============================================================================
// GLOBAL VARIABLES
// ============================================================================

// Analytics
window.adobeDataLayer = window.adobeDataLayer || [];

// Language settings
var isEnglish = true;
var globalLang = "";

// Chat interface state
var typingTimeout;
var isTyping = false;
var rows = 0;

// User role filtering
var userType = "";

// Data arrays populated from qaData.js
var questionsEN = [];
var questionsFR = [];
var answersENArr = [];
var answersFRArr = [];
var categoriesArr = [];
var categoriesENArr = [];
var categoriesFRArr = [];

// NLP Model - BM25 search index
var searchModel = {
  isReady: false,
  documents: [],           // All questions + answers
  docLength: [],           // Length of each document
  avgDocLength: 0,         // Average document length
  termDocFreq: {},         // How many docs contain each term
  termPositions: {},       // Term positions in each doc
  numDocs: 0
};

// ============================================================================
// CONFIGURATION
// ============================================================================

/**
 * Generate a CSS-safe class name from a category string */
function generateRoleClass(category) {
  if (!category) return 'general';
  return category
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric with hyphens
    .replace(/^-+|-+$/g, '');      // Remove leading/trailing hyphens
}

/**
 * Valid greeting keywords (both languages)
 */
var VALID_GREETINGS = [
  "hello", "allo", "hi", "hi there", "hey", "greetings", "salutations", 
  "howdy", "what's up", "yo", "hiya", "how are you", "how's it going",
  "allô", "salut", "bonjour", "bonsoir", "coucou", "ça va", "ca va"
];

// ============================================================================
// NLP & TEXT PROCESSING - BM25 SEARCH MODEL
// ============================================================================

/**
 * Build BM25 search index from all questions and answers
 * BM25 is a proven ranking function used by search engines
 */
function buildSearchModel() {
  console.log('Building BM25 search index...');

  var currentLang = globalLang || 'EN';
  var questions = currentLang === 'EN' ? questionsEN : questionsFR;
  var answers = currentLang === 'EN' ? answersENArr : answersFRArr;

  // Reset model
  searchModel.documents = [];
  searchModel.docLength = [];
  searchModel.termDocFreq = {};
  searchModel.termPositions = {};
  searchModel.numDocs = questions.length;

  var totalLength = 0;

  // Build document index
  for (var i = 0; i < questions.length; i++) {
    var questionText = questions[i] || '';
    var answerText = answers[i] || '';

    // Strip HTML from answer
    var tempDiv = document.createElement('div');
    tempDiv.innerHTML = answerText;
    var answerPlainText = tempDiv.textContent || tempDiv.innerText || '';

    // Weight question text more heavily (3x) than answer
    var weightedText = questionText + ' ' + questionText + ' ' + questionText + ' ' + answerPlainText;
    var keywords = extractKeywords(weightedText);

    searchModel.documents.push({
      index: i,
      keywords: keywords,
      termFreq: {}
    });

    // Calculate term frequencies for this document
    for (var j = 0; j < keywords.length; j++) {
      var term = keywords[j];
      var doc = searchModel.documents[i];

      doc.termFreq[term] = (doc.termFreq[term] || 0) + 1;

      // Track which documents contain this term
      if (!searchModel.termDocFreq[term]) {
        searchModel.termDocFreq[term] = 0;
      }
      if (doc.termFreq[term] === 1) {
        searchModel.termDocFreq[term]++;
      }
    }

    searchModel.docLength[i] = keywords.length;
    totalLength += keywords.length;
  }

  searchModel.avgDocLength = totalLength / searchModel.numDocs;
  searchModel.isReady = true;

  console.log('BM25 index ready with ' + searchModel.numDocs + ' documents, avg length: ' + searchModel.avgDocLength.toFixed(1));
}

/**
 * Calculate BM25 score for a document given query terms
 * BM25 parameters: k1 = 1.5 (term frequency saturation), b = 0.75 (length normalization)
 * Enhanced with phrase proximity bonus
 */
function calculateBM25Score(docIndex, queryTerms) {
  var k1 = 1.5;  // Controls term frequency saturation
  var b = 0.75;  // Controls length normalization

  var doc = searchModel.documents[docIndex];
  var docLen = searchModel.docLength[docIndex];
  var avgLen = searchModel.avgDocLength;
  var N = searchModel.numDocs;

  var score = 0;
  var matchedTerms = 0;
  var termScores = {}; // Track individual term scores

  for (var i = 0; i < queryTerms.length; i++) {
    var term = queryTerms[i];
    var termFreq = doc.termFreq[term] || 0;

    if (termFreq > 0) {
      matchedTerms++;

      // Calculate IDF for this term
      var docFreq = searchModel.termDocFreq[term] || 0;
      var idf = Math.log((N - docFreq + 0.5) / (docFreq + 0.5) + 1);

      // Calculate BM25 component for this term
      var numerator = termFreq * (k1 + 1);
      var denominator = termFreq + k1 * (1 - b + b * (docLen / avgLen));

      var termScore = idf * (numerator / denominator);
      termScores[term] = termScore;
      score += termScore;
    }
  }

  // Progressive match bonuses based on how many terms matched
  if (queryTerms.length === 2 && matchedTerms === 2) {
    score *= 2.0; // Strong boost for matching both terms in 2-word query
  } else if (queryTerms.length === 3 && matchedTerms === 3) {
    score *= 2.5; // Even stronger boost for matching all 3 terms
  } else if (queryTerms.length > 3 && matchedTerms === queryTerms.length) {
    score *= 2.0; // Boost for complete matches in longer queries
  } else if (matchedTerms > 1 && matchedTerms >= queryTerms.length * 0.67) {
    score *= 1.3; // Small boost for matching most terms
  }

  return {
    score: score,
    matchedTerms: matchedTerms,
    matchRatio: queryTerms.length > 0 ? matchedTerms / queryTerms.length : 0
  };
}

/**
 * Search using BM25 ranking
 * Returns array of { index, score, matchedTerms, matchRatio } sorted by score
 */
function searchBM25(queryText) {
  if (!searchModel.isReady) {
    console.warn('Search model not ready yet');
    return [];
  }

  // Extract keywords from query
  var queryTerms = extractKeywords(queryText);
  if (queryTerms.length === 0) return [];

  // Debug: Log extracted keywords
  console.log('Search query:', queryText);
  console.log('Extracted keywords:', queryTerms);

  var results = [];

  // Score each document
  for (var i = 0; i < searchModel.documents.length; i++) {
    var result = calculateBM25Score(i, queryTerms);

    // Only include documents that match at least one term
    if (result.score > 0) {
      results.push({
        index: i,
        score: result.score,
        matchedTerms: result.matchedTerms,
        matchRatio: result.matchRatio,
        relevance: Math.min(100, Math.round(result.score * 10))
      });
    }
  }

  // Sort by score (descending), then by match ratio
  results.sort(function(a, b) {
    if (Math.abs(b.score - a.score) > 0.01) {
      return b.score - a.score;
    }
    return b.matchRatio - a.matchRatio;
  });

  console.log('Total results:', results.length);
  if (results.length > 0) {
    console.log('Top 3 scores:', results.slice(0, 3).map(r => r.score.toFixed(2)));
  }

  return results;
}

// ============================================================================
// NLP & TEXT PROCESSING - UTILITIES
// ============================================================================

/**
 * Stop words to exclude from keyword matching (English + French)
 * These common words don't add meaningful search value
 */
var stopWords = new Set([
  // English
  'a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being',
  'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should',
  'may', 'might', 'must', 'shall', 'can', 'need', 'dare', 'ought', 'used',
  'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them',
  'my', 'your', 'his', 'its', 'our', 'their', 'mine', 'yours', 'hers', 'ours', 'theirs',
  'this', 'that', 'these', 'those', 'what', 'which', 'who', 'whom', 'whose',
  'where', 'when', 'why', 'how', 'all', 'each', 'every', 'both', 'few', 'more',
  'most', 'other', 'some', 'such', 'no', 'nor', 'not', 'only', 'own', 'same',
  'so', 'than', 'too', 'very', 'just', 'but', 'and', 'or', 'if', 'because',
  'as', 'until', 'while', 'of', 'at', 'by', 'for', 'with', 'about', 'against',
  'between', 'into', 'through', 'during', 'before', 'after', 'above', 'below',
  'to', 'from', 'up', 'down', 'in', 'out', 'on', 'off', 'over', 'under', 'again',
  'further', 'then', 'once', 'here', 'there',
  // French
  'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'et', 'ou', 'mais', 'donc',
  'car', 'ni', 'que', 'qui', 'quoi', 'dont', 'où', 'je', 'tu', 'il', 'elle',
  'nous', 'vous', 'ils', 'elles', 'me', 'te', 'se', 'lui', 'leur', 'mon', 'ma',
  'mes', 'ton', 'ta', 'tes', 'son', 'sa', 'ses', 'notre', 'votre', 'nos', 'vos',
  'ce', 'cet', 'cette', 'ces', 'est', 'sont', 'était', 'être', 'avoir', 'fait',
  'faire', 'puis', 'peut', 'peux', 'ai', 'as', 'a', 'avons', 'avez', 'ont',
  'dans', 'sur', 'sous', 'avec', 'sans', 'pour', 'par', 'en', 'vers', 'chez',
  'comment', 'pourquoi', 'quand', 'combien', 'quel', 'quelle', 'quels', 'quelles'
]);

/**
 * Simple word stemming - removes common suffixes for better matching
 * Handles both English and French suffixes
 */
function simpleStem(word) {
  word = word.toLowerCase();
  
  // English suffixes
  if (word.endsWith('ing')) return word.slice(0, -3);
  if (word.endsWith('tion')) return word.slice(0, -4);
  if (word.endsWith('ed') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('ly') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('es') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('s') && word.length > 3 && !word.endsWith('ss')) return word.slice(0, -1);
  
  // French suffixes
  if (word.endsWith('ement')) return word.slice(0, -5);
  if (word.endsWith('ation')) return word.slice(0, -5);
  if (word.endsWith('er') && word.length > 4) return word.slice(0, -2);
  if (word.endsWith('ez') && word.length > 4) return word.slice(0, -2);
  
  return word;
}

/**
 * Normalize text for consistent matching
 * - Converts to lowercase
 * - Removes accents
 * - Standardizes quotes and punctuation
 */
function normalizeText(text) {
  return text
    .toLowerCase()
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[''`]/g, "'")
    .replace(/[^\w\s'-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

/**
 * Extract meaningful keywords from text
 * Filters out stop words and applies stemming
 * Preserves important action verbs and context
 */
function extractKeywords(text) {
  var normalized = normalizeText(text);
  var words = normalized.split(/\s+/);
  var keywords = [];

  // Important action verbs that should NOT be stemmed aggressively
  var actionVerbs = new Set([
    'drop', 'close', 'open', 'reschedule', 'cancel', 'add', 'remove',
    'delete', 'create', 'enroll', 'unenroll', 'withdraw', 'register',
    'schedule', 'book', 'reserve', 'assign', 'unassign', 'approve',
    'reject', 'submit', 'complete', 'start', 'finish', 'pause', 'resume'
  ]);

  for (var i = 0; i < words.length; i++) {
    var word = words[i].replace(/^['-]+|['-]+$/g, ''); // Trim quotes/hyphens

    if (word.length > 2 && !stopWords.has(word)) {
      // Keep action verbs without stemming for better differentiation
      if (actionVerbs.has(word)) {
        keywords.push(word);
      } else {
        keywords.push(simpleStem(word));
      }
    }
  }
  return keywords;
}

/**
 * Calculate match score between user query and question text
 * Higher score = better match
 * Scoring: Exact match = 3, Stemmed match = 2, Partial match = 1
 * Returns: { score: number, matchedCount: number, matchRatio: number }
 */
function calculateMatchScore(userKeywords, questionText, additionalText) {
  var score = 0;
  var matchedKeywords = 0;
  var questionNorm = normalizeText(questionText);
  var additionalNorm = normalizeText(additionalText || '');
  var combinedText = questionNorm + ' ' + additionalNorm;
  var combinedKeywords = extractKeywords(combinedText);

  for (var i = 0; i < userKeywords.length; i++) {
    var userWord = userKeywords[i];
    var keywordMatched = false;

    // Exact match in combined text
    if (combinedText.indexOf(userWord) >= 0) {
      score += 3;
      keywordMatched = true;
    }

    // Stemmed or partial match (only if exact match didn't already score)
    if (!keywordMatched) {
      for (var j = 0; j < combinedKeywords.length; j++) {
        if (combinedKeywords[j] === userWord) {
          score += 2;
          keywordMatched = true;
          break;
        }
        // Partial match (word starts with user keyword or vice versa)
        if (combinedKeywords[j].startsWith(userWord) || userWord.startsWith(combinedKeywords[j])) {
          score += 1;
          keywordMatched = true;
          break;
        }
      }
    }

    if (keywordMatched) {
      matchedKeywords++;
    }
  }

  // Calculate match ratio (percentage of user keywords that were found)
  var matchRatio = userKeywords.length > 0 ? matchedKeywords / userKeywords.length : 0;

  return {
    score: score,
    matchedCount: matchedKeywords,
    matchRatio: matchRatio
  };
}

// ============================================================================
// ANALYTICS
// ============================================================================

/**
 * Push analytics beacon for user interactions
 */
function pushbeacon(event, customTitle = null) {
  const titleText = customTitle ? customTitle : $(event.target).text().trim();
  $('meta[name="dcterms.title"]').attr("content", "Suggested questions - " + titleText);

  if (typeof adobeDataLayer !== 'undefined' && Array.isArray(adobeDataLayer)) {
    adobeDataLayer.push({ event: "pageLoad" });
  }
}

/**
 * Sanitize text for analytics tracking
 */
function sanitizeForAnalytics(text) {
  return text
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "") // Remove accents
    .replace(/"/g, "'")                               // Replace double quotes
    .replace(/[^\w\s()-]/g, "")                       // Remove odd punctuation
    .trim();
}

// ============================================================================
// INITIALIZATION & DATA LOADING
// ============================================================================

/**
 * Main initialization function - called when the page loads
 */
function init() {
  // Focus skip-link for accessibility (first focusable element)
  const skipLink = document.querySelector('.skip-link');
  if (skipLink) {
    skipLink.focus();
  }

  // Show loading state
  showLoadingState();

  loadAllData();
  setLanguage();

  // Build BM25 search model asynchronously
  setTimeout(function() {
    buildSearchModel();

    // Once model is ready, show interface
    hideLoadingState();
    displayIntroMessage();
    addContent(globalLang);
    listInitialQuestions();
    enableSearchInput();
  }, 100);
}

/**
 * Show loading indicator
 */
function showLoadingState() {
  var textbox = document.getElementById('textbox');
  if (textbox) {
    textbox.disabled = true;
    textbox.placeholder = isEnglish ? 'Loading search engine...' : 'Chargement du moteur de recherche...';
  }

  var conversationDiv = document.getElementById('conversationDiv');
  if (conversationDiv) {
    var loadingMsg = document.createElement('div');
    loadingMsg.id = 'loading-indicator';
    loadingMsg.className = 'bubble assistant inlineblock';
    loadingMsg.style.textAlign = 'center';
    loadingMsg.innerHTML = isEnglish
      ? '<p>🔄 Initializing intelligent search engine...</p>'
      : '<p>🔄 Initialisation du moteur de recherche intelligent...</p>';

    var qnaTable = document.getElementById('QNA');
    if (qnaTable) {
      var row = qnaTable.insertRow(0);
      var cell = row.insertCell(0);
      cell.appendChild(loadingMsg);
    }
  }
}

/**
 * Hide loading indicator
 */
function hideLoadingState() {
  var loadingIndicator = document.getElementById('loading-indicator');
  if (loadingIndicator && loadingIndicator.parentNode && loadingIndicator.parentNode.parentNode) {
    loadingIndicator.parentNode.parentNode.remove();
  }
}

/**
 * Enable search input after model is ready
 */
function enableSearchInput() {
  var textbox = document.getElementById('textbox');
  if (textbox) {
    textbox.disabled = false;
    textbox.placeholder = isEnglish
      ? 'Type your question or keywords here...'
      : 'Saisissez votre question ou vos mots-clés ici...';
  }
}

/**
 * Load all data from qaData.js
 * Populates global arrays with questions, answers, and categories
 */
function loadAllData() {
  questionsEN = getTitles() || [];
  questionsFR = getFrenchQ() || [];
  answersENArr = getAnswersEN() || [];
  answersFRArr = getAnswersFR() || [];
  categoriesArr = getCategory() || [];
  categoriesENArr = getCategoryEN() || [];
  categoriesFRArr = getCategoryFR() || [];
}

/**
 * Detect and set the page language (EN or FR)
 * Based on the language toggle element in the HTML
 */
function setLanguage() {
  var languageElement = document.getElementById("language");
  var language = languageElement ? languageElement.innerText : "";

  if (language == "") {
    // Fallback: detect by presence of EN class
    var ENLength = document.getElementsByClassName("EN").length;
    isEnglish = ENLength > 0;
    globalLang = isEnglish ? "EN" : "FR";
  } else {
    // Language toggle is present
    if (language == "Français") {
      isEnglish = true;
      globalLang = "EN";
    } else {
      isEnglish = false;
      globalLang = "FR";
    }
  }
}

// ============================================================================
// CONTENT POPULATION & ROLE MAPPING
// ============================================================================

/**
 * Get unique categories from the loaded data with their display names
 * Returns array of objects: { category, categoryEN, categoryFR, roleClass }
 * Automatically detects all categories present in qaData.js
 */
function getUniqueCategories() {
  var categoriesMap = {};

  for (var i = 0; i < categoriesArr.length; i++) {
    var cat = categoriesArr[i];
    if (cat && cat.trim() !== '' && !categoriesMap[cat]) {
      categoriesMap[cat] = {
        category: cat,
        categoryEN: categoriesENArr[i] || cat,
        categoryFR: categoriesFRArr[i] || cat,
        roleClass: generateRoleClass(cat)
      };
    }
  }

  return Object.values(categoriesMap);
}

/**
 * Map category to role class
 * Returns the CSS class name for a given category
 * Uses the generateRoleClass function to create consistent class names
 */
function getCategoryRoleClass(category) {
  var trimmedCategory = (category || '').trim();
  return generateRoleClass(trimmedCategory);
}

/**
 * Add questions and answers to the page
 * Populates the DOM with content based on selected language
 */
function addContent(language) {
  const questionsList = document.getElementById('questions');
  const answersList = document.getElementById('answers');

  // Select data arrays based on language
  let titles, answers, categories;

  if (language === 'EN') {
    titles = questionsEN;
    answers = answersENArr;
    categories = categoriesArr;
  } else if (language === 'FR') {
    titles = questionsFR;
    answers = answersFRArr;
    categories = categoriesArr;
  }

  // Create DOM elements for each question/answer pair
  for (let i = 0; i < titles.length; i++) {
    const title = titles[i];

    // Skip empty titles
    if (!title || title.trim() === '') continue;

    // Create question button
    const button = document.createElement('button');
    button.textContent = title;
    button.setAttribute(
      "data-gc-analytics-customclick",
      `ESDC-EDSC:SABAAI:${sanitizeForAnalytics(questionsEN[i] || title)}`
    );

    // Determine role class based on category (dynamically mapped)
    var roleClass = getCategoryRoleClass(categories[i]);

    // First 10 questions are visible by default, rest are hidden
    if (i < 10) {
      button.className = "bubble question default visible " + roleClass;
    } else {
      button.className = "bubble question hidden " + roleClass;
    }

    button.setAttribute('id', `Q${i}`);
    button.setAttribute('data-index', i); // Store original index
    button.setAttribute('onclick', `findAnswer(${i});`);
    questionsList.appendChild(button);

    // Create answer div (hidden until question is clicked)
    const answerDiv = document.createElement('DIV');
    answerDiv.className = "bubble answer inlineblock";
    answerDiv.innerHTML = answers[i] || 'Answer not available';
    answerDiv.setAttribute('id', `A${i}`);
    answersList.appendChild(answerDiv);
  }
}

/**
 * Get question text for each question based on current language
 * Used for search matching
 */
function getQuestionTexts() {
  const newArray = [];
  var questionsDiv = document.getElementById("questions");
  if (!questionsDiv) return newArray;

  let length = questionsDiv.getElementsByTagName("button").length;

  for (let i = 0; i < length; i++) {
    var questionText = questionsDiv.getElementsByTagName("button")[i].innerText;
    newArray.push(questionText);
  }

  return newArray;
}

// ============================================================================
// CHAT INTERFACE & CONVERSATION MANAGEMENT
// ============================================================================

/**
 * Display the intro/welcome message
 * Includes role selection buttons
 */
function displayIntroMessage() {
  var message = document.createElement("p");

  if (isEnglish) {
    message.innerText = "Hello, I am Sam, your Saba Virtual Assistant! I'm programmed to answer your Saba-related inquiries based on a list of most common questions.\n\nTo begin, you can filter my questions in three ways:\n\n1) To find all predetermined questions, select the List all questions button, located directly in the \"Suggested Questions\" box on the right\n\n2) To filter the questions by keyword, enter one or several keywords or an enquiry in the message field below.\n\n3) To filter the questions by role, select the role related to your question directly in this bubble.\n\nOnce you find the appropriate question in the \"Suggested Questions\" box, you can select it and I will answer in this chat box.";
  } else {
    message.innerText = "Bonjour, je suis Sam, votre assistant virtuel Saba! Je suis programmé pour répondre à vos demandes de renseignements concernant Saba en me basant sur une liste de questions les plus courantes\n\nPour commencer, vous pouvez filtrer mes questions de trois façons:\n\n 1) Pour trouver toutes les questions prédéterminées, sélectionnez le bouton Afficher toutes les questions, situé dans la boîte « Questions suggérées » à droite.\n\n2) Pour filtrer les questions par mot-clé, saisissez un ou plusieurs mots-clés ou une question dans le champ de message ci-dessous.\n\n3) Pour filtrer les questions par rôle, sélectionnez le rôle lié à votre question directement dans cette bulle.\n\nQuand vous aurez trouvé la question appropriée dans la boîte « Questions suggérées », vous pourrez la sélectionner et je vous répondrai dans cette boîte de dialogue.";
  }

  askUserType(message);
  assistantTypes(message, false, true); // Skip focus for intro message
}

/**
 * Clear the chat conversation and reset to initial state
 */
function clearChat() {
  var qnaTable = document.getElementById("QNA");
  qnaTable.innerHTML = '';
  rows = 0;

  listInitialQuestions();
  displayIntroMessage();

  var textbox = document.getElementById("textbox");
  if (textbox) {
    textbox.value = '';
  }

  // Rebuild search model if language might have changed
  if (!searchModel.isReady) {
    buildSearchModel();
  }

  scrollDownOfDiv("conversationDiv");
}

/**
 * Handle user message submission
 * Processes greetings and keyword searches
 */
function sendMessage() {
  pushbeacon({ target: { textContent: "Search" } }, "Search");

  var textboxMessage = document.getElementById("textbox").value;
  var message = document.createElement("p");
  message.innerText = textboxMessage;
  var messageParts = textboxMessage.split(" ");

  document.getElementById("textbox").value = "";

  let introMessage = messageParts[0].toLowerCase();

  // Handle greetings
  if (VALID_GREETINGS.includes(introMessage)) {
    if (isEnglish) {
      message.innerHTML = `
        <div class="black">
          <p class="black">Welcome to my page!</p><br>
          <p>I was given a predetermined list of frequently asked questions and answers to help you with anything Saba-related.</p><br>
          <p>To begin, you can filter my questions in three ways:</p><br>
          <ol>
            <li>To find all predetermined questions, select the View all questions button, located directly in the "Suggested Questions" box on the right.</li><br>
            <li>To filter the questions by keyword, enter one or several keywords or an enquiry in the message field below.</li><br>
            <li>To filter the questions by role, select the role related to your question directly in this bubble.</li><br>
          </ol>
          <p>Once you find the appropriate question in the "Suggested Questions" box, you can select it and I will answer in this chat box.</p><br>
        </div>`;
    } else {
      message.innerHTML = `
        <div class="black">
          <p class="black">Bienvenue sur ma page!</p><br>
          <p>On m'a donné une liste de questions et réponses prédéterminées qui sont fréquemment posées afin que je puisse vous aider avec tout ce qui concerne Saba.</p><br>
          <p>Pour commencer, vous pouvez filtrer mes questions de trois façons:</p><br>
          <ol>
            <li>Pour trouver toutes les questions prédéterminées, sélectionnez le bouton Afficher toutes les questions, situé dans la boîte « Questions suggérées » à droite.</li><br>
            <li>Pour filtrer les questions par mot-clé, saisissez un ou plusieurs mots-clés ou une question dans le champ de message ci-dessous.</li><br>
            <li>Pour filtrer les questions par rôle, sélectionnez le rôle lié à votre question directement dans cette bulle.</li><br>
          </ol>
          <p>Quand vous aurez trouvé la question appropriée dans la boîte « Questions suggérées », vous pourrez la sélectionner et je vous répondrai dans cette boîte de dialogue.</p><br>
        </div>`;
    }

    assistantTypes(message, true);
    scrollDownOfDiv("conversationDiv");
    return;
  }

  // Handle keyword search
  if (textboxMessage != "") {
    var userMessage = document.createElement("p");
    userMessage.innerText = textboxMessage;
    userTypes(userMessage);

    var questionsDiv = document.getElementById("questions");
    if (!questionsDiv) return;

    // Use BM25 search for accurate ranking
    var searchResults = searchBM25(textboxMessage);

    // Extract query terms for filtering
    var queryTerms = extractKeywords(textboxMessage);

    // Smarter minimum match requirements and score thresholds
    var minMatchRatio;
    var minScore = 0; // Minimum BM25 score threshold

    if (queryTerms.length === 1) {
      minMatchRatio = 1.0; // Must match the single keyword
      minScore = 0.5; // Higher threshold for single keyword to filter weak matches
    } else if (queryTerms.length === 2) {
      minMatchRatio = 1.0; // Must match BOTH keywords for 2-word queries
      minScore = 0.3;
    } else if (queryTerms.length === 3) {
      minMatchRatio = 0.67; // Must match at least 2 of 3 keywords
      minScore = 0.2;
    } else {
      minMatchRatio = 0.5; // Must match at least half for longer queries
      minScore = 0.15;
    }

    // Filter and map results to question buttons
    var scoredQuestions = [];
    for (var i = 0; i < searchResults.length; i++) {
      var result = searchResults[i];
      var questionIndex = result.index;

      // Apply BOTH match ratio filter AND minimum score threshold
      if (result.matchRatio >= minMatchRatio && result.score >= minScore) {
        // Find button by data-index attribute (not DOM position)
        var htmlButton = questionsDiv.querySelector('button[data-index="' + questionIndex + '"]');

        if (htmlButton) {
          scoredQuestions.push({
            index: questionIndex,
            button: htmlButton,
            score: result.score,
            matchedTerms: result.matchedTerms,
            matchRatio: result.matchRatio,
            relevance: result.relevance
          });
        }
      }
    }

    // Show matching questions
    var foundKeyword = scoredQuestions.length > 0;

    if (foundKeyword) {
      hideAllQuestions();

      // Limit results to top matches (fewer is better for relevance)
      var maxToShow = Math.min(scoredQuestions.length, 10);

      // Use CSS order to arrange results without moving DOM elements
      for (let i = 0; i < maxToShow; i++) {
        var btn = scoredQuestions[i].button;

        // Set visual order using CSS flexbox order property
        btn.style.order = i.toString();

        // Make it visible
        btn.classList.remove("hidden");
        btn.classList.add("visible");
        btn.style.visibility = 'visible';
        btn.style.display = 'block';
      }

      var message = document.createElement("p");

      if (isEnglish) {
        var matchCount = Math.min(scoredQuestions.length, maxToShow);
        if (matchCount === 1) {
          message.innerText = "I found 1 question that matches your search. Please see the Questions panel.";
        } else if (matchCount <= 3) {
          message.innerText = "I found " + matchCount + " questions that match your search, ordered by relevance. Please see the Questions panel.";
        } else if (matchCount <= 10) {
          message.innerText = "I found " + matchCount + " questions that might help you, ordered by best match. Please see the Questions panel.";
        } else {
          message.innerText = "I found " + matchCount + " questions. The most relevant ones are shown first. Please see the Questions panel.";
        }
      } else {
        var matchCount = Math.min(scoredQuestions.length, maxToShow);
        if (matchCount === 1) {
          message.innerText = "J'ai trouvé 1 question qui correspond à votre recherche. Veuillez consulter le panneau des Questions.";
        } else if (matchCount <= 3) {
          message.innerText = "J'ai trouvé " + matchCount + " questions qui correspondent à votre recherche, classées par pertinence. Veuillez consulter le panneau des Questions.";
        } else if (matchCount <= 10) {
          message.innerText = "J'ai trouvé " + matchCount + " questions qui pourraient vous aider, classées par meilleure correspondance. Veuillez consulter le panneau des Questions.";
        } else {
          message.innerText = "J'ai trouvé " + matchCount + " questions. Les plus pertinentes sont affichées en premier. Veuillez consulter le panneau des Questions.";
        }
      }

      // When showing filtered results, we're not in "all questions" or "initial questions" mode
      // Update the toggle button to show "List all questions" / "Afficher toutes les questions"
      showingAllQuestions = false;
      updateToggleButtonText();
      showAllQuestionsButton();
      assistantTypes(message, false);
    } else {
      var message = document.createElement("p");

      if (isEnglish) {
        message.innerText = "I'm sorry, I could not find any information on this. Please try a different keyword or enquiry.";
      } else {
        message.innerText = "Je suis désolé, je n'ai trouvé aucune information à ce sujet. Veuillez essayer un autre mot-clé ou une autre question.";
      }

      assistantTypes(message, false);
    }
  }

  scrollDownOfDiv("conversationDiv");
}

/**
 * Find and display the answer for a question
 * @param {number} x - Index of the question
 */
function findAnswer(x) {
  var questionElement = document.getElementById("Q" + x.toString());
  if (!questionElement) {
    console.error('Question element not found for index:', x);
    return;
  }

  var question = document.createElement("p");
  var questionText = questionElement.childNodes[0];
  question.innerText = questionText ? questionText.textContent : questionElement.innerText;
  userTypes(question);

  var answerElement = document.getElementById("A" + x.toString());
  if (!answerElement) {
    console.error('Answer element not found for index:', x);
    var errorAnswer = document.createElement("p");
    errorAnswer.innerText = "Sorry, answer not found for this question.";
    assistantTypes(errorAnswer, true);
    return;
  }

  var answer = document.createElement("p");
  answer.innerHTML = answerElement.innerHTML;

  assistantTypes(answer, true);
  scrollDownOfDiv("conversationDiv");
}

// ============================================================================
// QUESTION VISIBILITY & FILTERING
// ============================================================================

// Track the current state of the questions display
var showingAllQuestions = false;

/**
 * Toggle between showing all questions and showing initial questions
 */
function toggleQuestions() {
  if (showingAllQuestions) {
    listInitialQuestions();
  } else {
    listAllQuestions();
  }
}

/**
 * Show all questions
 */
function listAllQuestions() {
  displayAllQuestions();
  showingAllQuestions = true;
  updateToggleButtonText();
}

/**
 * Show only initial (first 10) questions
 */
function listInitialQuestions() {
  var questionsDiv = document.getElementById("questions");
  if (!questionsDiv) return;

  var nbQuestions = questionsDiv.getElementsByTagName("button").length;

  for (let i = 0; i < nbQuestions; i++) {
    var htmlButton = questionsDiv.getElementsByTagName("button")[i];
    htmlButton.style.order = ''; // Reset order to original

    if (htmlButton.classList.contains("default")) {
      // Show default (first 10) questions
      htmlButton.classList.remove("hidden");
      htmlButton.classList.add("visible");
      htmlButton.style.visibility = 'visible';
      htmlButton.style.display = 'block';
    } else {
      // Hide non-default questions
      htmlButton.classList.add("hidden");
      htmlButton.classList.remove("visible");
      htmlButton.style.visibility = 'hidden';
      htmlButton.style.display = 'none';
    }
  }

  showingAllQuestions = false;
  updateToggleButtonText();
  showAllQuestionsButton();
  hideInitialQuestionsButton();
}

/**
 * Update the toggle button text based on current state
 */
function updateToggleButtonText() {
  var buttonTextElement = document.getElementById("toggleQuestionsText");
  if (!buttonTextElement) return;

  if (showingAllQuestions) {
    // Currently showing all questions, so button should offer to show initial
    if (isEnglish) {
      buttonTextElement.innerText = "Show initial questions";
    } else {
      buttonTextElement.innerText = "Afficher les questions initiales";
    }
  } else {
    // Currently showing initial questions, so button should offer to show all
    if (isEnglish) {
      buttonTextElement.innerText = "List all questions";
    } else {
      buttonTextElement.innerText = "Afficher toutes les questions";
    }
  }
}

/**
 * Hide all questions
 */
function hideAllQuestions() {
  var questionsDiv = document.getElementById("questions");
  if (!questionsDiv) return;

  var nbQuestions = questionsDiv.getElementsByTagName("button").length;
  for (let i = 0; i < nbQuestions; i++) {
    var btn = questionsDiv.getElementsByTagName("button")[i];
    btn.classList.add("hidden");
    btn.classList.remove("visible");
    btn.style.visibility = 'hidden';
    btn.style.display = 'none';
    btn.style.order = ''; // Reset order
  }
}

/**
 * Display all questions
 */
function displayAllQuestions() {
  var questionsDiv = document.getElementById("questions");
  if (!questionsDiv) return;

  var nbQuestions = questionsDiv.getElementsByTagName("button").length;
  for (let i = 0; i < nbQuestions; i++) {
    var btn = questionsDiv.getElementsByTagName("button")[i];
    btn.classList.remove("hidden");
    btn.classList.add("visible");
    btn.style.visibility = 'visible';
    btn.style.display = 'block';
    btn.style.order = ''; // Reset to original order
  }
  showingAllQuestions = true;
  updateToggleButtonText();
  showInitialQuestionsButton();
  hideAllQuestionsButton();
}

// Button visibility helpers
function showInitialQuestionsButton() {
  var htmlButton = document.getElementById("initialQuestions");
  if (htmlButton) {
    htmlButton.style.visibility = 'visible';
    htmlButton.style.display = 'block';
  }
}

function hideInitialQuestionsButton() {
  var htmlButton = document.getElementById("initialQuestions");
  if (htmlButton) {
    htmlButton.style.visibility = 'hidden';
    htmlButton.style.display = 'none';
  }
}

function showAllQuestionsButton() {
  var htmlButton = document.getElementById("allQuestions");
  if (htmlButton) {
    htmlButton.style.visibility = 'visible';
    htmlButton.style.display = 'block';
  }
}

function hideAllQuestionsButton() {
  var htmlButton = document.getElementById("allQuestions");
  if (htmlButton) {
    htmlButton.style.visibility = 'hidden';
    htmlButton.style.display = 'none';
  }
}

// ============================================================================
// ROLE SELECTION & FILTERING
// ============================================================================

/**
 * Add role selection buttons to the intro message
 * Dynamically creates buttons based on unique categories in the data
 */
function askUserType(message) {
  var break1 = document.createElement("br");
  var break2 = document.createElement("br");
  message.append(break1);
  message.append(break2);

  // Get all unique categories from the data
  var uniqueCategories = getUniqueCategories();

  // Create a button for each category
  uniqueCategories.forEach(function(catInfo) {
    var button = document.createElement("button");
    button.classList.add("bubble", "question", "bold");

    // Set button text based on language
    button.innerText = isEnglish ? catInfo.categoryEN : catInfo.categoryFR;

    // Set button click handler
    button.onclick = function (e) {
      setUserByRoleClass(catInfo.roleClass);
      pushbeacon(e, catInfo.categoryEN);
    };

    message.append(button);
  });
}

/**
 * Set user role and filter questions by role class
 * @param {string} roleClass - The CSS class name for the role
 */
function setUserByRoleClass(roleClass) {
  userType = roleClass;
  filterQuestionsByUserType();
}

/**
 * Filter questions to show only those matching the selected role
 */
function filterQuestionsByUserType() {
  var questionsDiv = document.getElementById("questions");
  if (!questionsDiv) return;

  var nbQuestions = questionsDiv.getElementsByTagName("button").length;

  // Get all possible role classes from unique categories
  var uniqueCategories = getUniqueCategories();
  var allRoleClasses = uniqueCategories.map(function(cat) { return cat.roleClass; });

  for (let i = 0; i < nbQuestions; i++) {
    var htmlButton = questionsDiv.getElementsByTagName("button")[i];
    var classes = htmlButton.classList;

    // Check if button has any role class (dynamically check all possible role classes)
    var hasRoleClass = false;
    for (var j = 0; j < allRoleClasses.length; j++) {
      if (classes.contains(allRoleClasses[j])) {
        hasRoleClass = true;
        break;
      }
    }

    if (hasRoleClass) {
      if (classes.contains(userType)) {
        // Show questions matching the selected user type
        htmlButton.classList.remove("hidden");
        htmlButton.classList.add("visible");
        htmlButton.style.visibility = 'visible';
        htmlButton.style.display = 'block';
      } else {
        // Hide questions not matching the selected user type
        htmlButton.classList.add("hidden");
        htmlButton.classList.remove("visible");
        htmlButton.style.visibility = 'hidden';
        htmlButton.style.display = 'none';
      }
    } else {
      // Questions without role class - show them (generic questions)
      htmlButton.classList.remove("hidden");
      htmlButton.classList.add("visible");
      htmlButton.style.visibility = 'visible';
      htmlButton.style.display = 'block';
    }
  }
}

// ============================================================================
// CHAT UI - MESSAGE DISPLAY
// ============================================================================

/**
 * Scroll conversation div to bottom
 */
function scrollDownOfDiv(DivName) {
  var objDiv = document.getElementById(DivName);
  objDiv.scrollTop = objDiv.scrollHeight;
}

/**
 * Display user message in chat
 */
function userTypes(elmt) {
  elmt.classList.add("bubble", "user", "inlineblock");

  var qnaTable = document.getElementById("QNA");
  if (!qnaTable) return;

  if (rows == 0) {
    rows = qnaTable.getElementsByTagName("tr").length;
  } else {
    rows++;
  }

  var row = qnaTable.insertRow(rows);
  row.classList.add("userBubble");

  // Create message cell
  const td1 = row.insertCell(0);
  td1.appendChild(elmt);

  // Create icon cell
  const td2 = row.insertCell(1);
  td2.classList.add("userIconTD");

  const img = document.createElement("img");
  img.classList.add("userIcon");
  img.src = "./avatar.png";
  img.alt = "";
  td2.appendChild(img);
}

/**
 * Display assistant message in chat with typing animation
 * @param {HTMLElement} elmt - Message element to display
 * @param {boolean} withCloseMessage - Whether to include close/survey message
 * @param {boolean} skipFocus - Whether to skip auto-focusing (used for intro message)
 */
function assistantTypes(elmt, withCloseMessage, skipFocus = false) {
  elmt.classList.add("bubble", "assistant", "inlineblock");

  var typingBubble = document.getElementById("typingBubble");
  if (typingBubble) {
    typingBubble.style.visibility = 'visible';
    typingBubble.style.display = 'inline';
  }

  typingTimeout = setTimeout(() => {
    if (isTyping == false) {
      isTyping = true;
      if (typingBubble) {
        typingBubble.style.visibility = 'hidden';
        typingBubble.style.display = 'none';
      }

      var qnaTable = document.getElementById("QNA");
      if (!qnaTable) return;

      if (rows == 0) {
        rows = qnaTable.getElementsByTagName("tr").length;
      } else {
        rows++;
      }

      var row = qnaTable.insertRow(rows);
      var cell = row.insertCell(0);

      const img = document.createElement("img");
      img.classList.add("userIcon");
      img.src = "./avatar.png";
      img.alt = "";

      const td1 = document.createElement("td");
      td1.classList = "assistantIconTD";
      td1.appendChild(img);
      cell.appendChild(td1);

      const td2 = document.createElement("td");
      td2.appendChild(elmt);
      cell.appendChild(td2);

      if (withCloseMessage) {
        add_closeMessage(td2);
      }

      scrollDownOfDiv("conversationDiv");

      // Only set focus if not skipped (e.g., not the intro message)
      if (!skipFocus) {
        td2.setAttribute("tabindex", "0");
        td2.focus();
        td2.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, 600);

  isTyping = false;
}

/**
 * Add closing message with survey link
 */
function add_closeMessage(tdElemt) {
  var message = document.createElement("p");
  message.classList.add("bubble", "assistant", "inlineblock");

  var nationalLink = document.createElement('a');
  nationalLink.target = 'blank';

  if (isEnglish) {
    message.innerText = "If you require more assistance, please open a ticket with the  ";
    nationalLink.href = 'https://iservice.prv/eng/imit/nsd/index.shtml';
    nationalLink.textContent = 'National Service Desk';
  } else {
    message.innerText = "Si vous avez besoin d'assistance supplémentaire, veuillez ouvrir un billet auprès de ";
    nationalLink.href = 'https://iservice.prv/fra/giti/isn/index.shtml';
    nationalLink.textContent = 'InfoService national';
  }

  message.appendChild(nationalLink);

  if (isEnglish) {
    message.append(" to get in touch with one of the Learning Infrastructure team's resolvers.");
  } else {
    message.append(" pour entrer en contact avec l'un des agents de l'équipe Infrastructure de l'apprentissage.");
  }

  // Add survey link
  var messageBreak1 = document.createElement("br");
  var messageBreak2 = document.createElement("br");
  message.appendChild(messageBreak1);
  message.appendChild(messageBreak2);

  var surveyMessage = document.createElement("p");
  var surveyLink = document.createElement('a');

  surveyLink.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=RljVnoGKRkKs2LGgGr_A0cPxtgg3kb9EnwLqsAYp2pZUNUE5SFRUOEZXNjFHQzBTN0JWQldSOENCSS4u';
  surveyLink.target = 'blank';

  if (isEnglish) {
    surveyMessage.append("How did I do? Please take this short ");
    surveyLink.textContent = 'survey';
  } else {
    surveyMessage.append("Que pensez-vous de mon travail ? Répondez à ce court ");
    surveyLink.textContent = 'questionnaire';
  }

  surveyMessage.appendChild(surveyLink);
  message.append(surveyMessage);

  if (isEnglish) {
    surveyMessage.append(" to help me improve and serve you better! In the upper right-hand corner of the survey, you will find options to select the language of your choice and/or using the immersive reader.");
  } else {
    surveyMessage.append(" pour m'aider à m'améliorer et à mieux vous servir ! Dans le coin supérieur droit du questionnaire, vous trouverez des options pour sélectionner la langue de votre choix et/ou en utilisant le lecteur immersif.");
  }

  tdElemt.appendChild(message);
}

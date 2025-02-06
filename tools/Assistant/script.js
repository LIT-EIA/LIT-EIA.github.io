


var isEnglish = true;
let globaLang = "";
// Execute based on language selection


var typingTimeout;
var isTyping = false;

var userType = "";
var keywordJSON = [];
var questionJSON = [];
var answerJSON = [];

var defaultforMessage = false;
var rows = 0;





//General approach: We usually display all questions, and then hide as we go.
//We do NOT do the opposite: hiding all, display questions as we go.

function init(){
	setLanguage();
	displayIntroMessage();
	
	
	populateKeywords();
	focus();
	addContent(globaLang);
	listInitialQuestions();
	// listAllQuestions();

	// addFrench();
		
}

// var answersFR = getAnswersFR();
var titlesEN = getTitles(); // EnglishQuestions
var titlesFR = getFrenchQ(); // FrenchQuestions

var keywordsEN = getKeywordsEN();
var keywordsFR = getKeywordsFR();

var answersEN = getAnswersEN();
var answersFR = getAnswersFR();

var categories = getCategory();


// add Question , Answers and Keywords in English
function addContent(language) {
    const questionsList = document.getElementById('questions');
    const answersList = document.getElementById('answers');

    let titles = [];
    let keywords = [];
    let answers = [];
	let type = []

    if (language === 'EN') {
        titles = titlesEN;
        keywords = keywordsEN;
        answers = answersEN;
		type = categories;
    } else if (language === 'FR') {
        titles = titlesFR;
        keywords = keywordsFR;
        answers = answersFR;
		type = categories;
    }

    let customIndex = 0; // Ensure this starts at 0

    titles.forEach((title) => {
        // Create a new button for each title
        const button = document.createElement('button');
        button.textContent = title.replace(); // Modify if needed
	
    // Classify the first ten questions based on type and add the default class
    // For the first 10 questions
	if(customIndex<10){
		if (type[customIndex] === 'Learner') {
			// console.log('expected result', type[customIndex]);
			button.className = "bubble question  default visible employee"; // For Learners
		} else if (type[customIndex] === 'Manager') {
			console.log('expected result', type[customIndex]);
			button.className = "bubble question  default visible manager"; // For Managers
		} else if (type[customIndex] === 'Admin') {
			// console.log('expected result', type[customIndex]);
			button.className = "bubble question default  visible admin"; // For Admins
		}

	}else{
  
		// Classify remaining questions based on type without the default class
		if (type[customIndex] === 'Learner') {
			// console.log('expected result', type[customIndex]);
			button.className = "bubble question hidden employee"; // For Learners
		} else if (type[customIndex] === 'Manager') {
			console.log('expected result', type[customIndex]);
			button.className = "bubble question hidden manager"; // For Managers
		} else if (type[customIndex] === 'Admin') {
			// console.log('expected result', type[customIndex]);
			button.className = "bubble question hidden admin"; // For Admins
		} else if (type[customIndex] === 'Instructor'){
			button.className = "bubble question hidden instructor"
		}else if (type[customIndex] === 'Content Admin'){
			button.className = "bubble question hidden content"
		}
	
	}

        button.setAttribute('id', `Q${customIndex}`);
        button.setAttribute('onclick', `findAnswer(${customIndex})`);
        questionsList.appendChild(button); // Append the new button to the list

        // Create a paragraph element for keywords
        const paragraph = document.createElement('p');
        paragraph.className = "keywords";
        paragraph.textContent = keywords[customIndex]; // Make sure customIndex aligns with keywords
        button.appendChild(paragraph);

        // Create a div element for answers
        const answerDiv = document.createElement('DIV');
        answerDiv.className = "bubble answer inlineblock";
        answerDiv.innerHTML = answers[customIndex]; // Make sure customIndex aligns with answers
        answerDiv.setAttribute('id', `A${customIndex}`);
        answersList.appendChild(answerDiv);

        customIndex++; // Increment the index for the next item
    });

    // Optional: Log for verification
    console.log(`${language} Questions:`, questionsList);
    console.log(`${language} Answers:`, answersList);
}


function setLanguage(){
	var language = document.getElementById("language").innerText;

	// console.log("what is this", language);
	
	if (language == ""){
		var ENLength = document.getElementsByClassName("EN").length;
		isEnglish = ENLength;
	} else {
		//On the website, so the language is not hidden
		if (language == "Français"){
			isEnglish = true;
			globaLang = "EN"
		} else {
			//Used to be false.
			isEnglish = false;
			globaLang = "FR"
		}
	}
	
}




// const pointAEng = " 1) To find all predetermined questions, select the View all questions button, located directly in the “Suggested Questions” box on the right.";
// const pointBEng =  " 2) To filter the questions by keyword, enter one or several keywords or an enquiry in the message field below.";
// const pointCtEng = "3) To filter the questions by role, select the role related to your question directly in this bubble."

function displayIntroMessage(){
	var message = document.createElement("p");
	if (isEnglish){
		message.innerText = "Hello, I am Sam, your Saba Virtual Assistant! I’m programmed to answer your Saba-related inquiries based on a list of most common questions.\n\nTo begin, you can filter my questions in three ways:\n\n1) To find all predetermined questions, select the List all questions button, located directly in the “Suggested Questions” box on the right\n\n2) To filter the questions by keyword, enter one or several keywords or an enquiry in the message field below.\n\n3) To filter the questions by role, select the role related to your question directly in this bubble.\n\nOnce you find the appropriate question in the “Suggested Questions” box, you can select it and I will answer in this chat box.";
	}else {
		message.innerText = "Bonjour, je suis Sam, votre assistant virtuel Saba! Je suis programmé pour répondre à vos demandes de renseignements concernant Saba en me basant sur une liste de questions les plus courantes\n\nPour commencer, vous pouvez filtrer mes questions de trois façons:\n\n 1) Pour trouver toutes les questions prédéterminées, sélectionnez le bouton Afficher toutes les questions, situé dans la boîte « Questions suggérées » à droite.\n\n2) Pour filtrer les questions par mot-clé, saisissez un ou plusieurs mots-clés ou une question dans le champ de message ci-dessous.\n\n3) Pour filtrer les questions par rôle, sélectionnez le rôle lié à votre question directement dans cette bulle.\n\nQuand vous aurez trouvé la question appropriée dans la boîte « Questions suggérées », vous pourrez la sélectionner et je vous répondrai dans cette boîte de dialogue.";
	}
	askUserType(message);
	
	assistantTypes(message, false);
}

//when a user press enter in the textbox, it will fire this function.
function sendMessage(){
	let validGreetings = ["hello", "allo", "hi" , "hi there" , " hey" ,"greetings", " salutations" ,"howdy", "what's up" ,  "yo" , "hiya" ,"how are you" ,"how's it going"
		, "hello" , "hi" , "hi there" , " hey" ,"greetings", " salutations" ,"howdy", "what's up" ,  "yo" , "hiya" ,"how are you" ,"how's it going" ,
		"Allô" ,  "allo" , "salut" , "bonjour" , "bonsoir" , "coucou" , "salutations" ,"ça va" , "ca va" , "hey" , "yo" ];
	//textbox is the message bar.
	
		var textboxMessage = document.getElementById("textbox").value;
		var message = document.createElement("p");
		message.innerText = textboxMessage;
		console.log('result is ', message)
		var messageParts = textboxMessage.split(" ");
			
		
		document.getElementById("textbox").value = "";



		let introMessage = messageParts[0].toLowerCase();
		
			if( validGreetings.includes(introMessage)){

	
			
				if(isEnglish){
					message.innerHTML = `
							<div class ="black">
								<p class= "black">Welcome to my page! </p> <br>
	
								<p> I was given a predetermined list of frequently asked questions and answers to help you with anything Saba-related. </p> <br>
	
	
								<p>To begin, you can filter my questions in three ways:</p> <br>
								<ol>
									<li>To find all predetermined questions, select the View all questions button, located directly in the “Suggested Questions” box on the right. </li> <br>
									<li>To filter the questions by keyword, enter one or several keywords or an enquiry in the message field below.  </li> <br>
									<li>To filter the questions by role, select the role related to your question directly in this bubble. </li> <br>
								</ol>


								<p> Once you find the appropriate question in the “Suggested Questions” box, you can select it and I will answer in this chat box. </p> <br>


							</div>`
							
					
	
							console.log('here2');
							assistantTypes(message,  true );
				}else{
					message.innerHTML = 
					`
					<div class ="black">
						<p class="black">Bienvenue sur ma page!  </p> <br>
	
						<p> On m’a donné une liste de questions et réponses prédéterminées qui sont fréquemment posées afin que je puisse vous aider avec tout ce qui concerne Saba.. </p> <br>
	
	
						<p>Pour commencer, vous pouvez filtrer mes questions de trois façons:  </p> <br>
						<ol>
							<li> Pour trouver toutes les questions prédéterminées, sélectionnez le bouton Afficher toutes les questions, situé dans la boîte « Questions suggérées » à droite.  </li> <br>
							<li>Pour filtrer les questions par mot-clé, saisissez un ou plusieurs mots-clés ou une question dans le champ de message ci-dessous.   </li> <br>
							<li>Pour filtrer les questions par rôle, sélectionnez le rôle lié à votre question directement dans cette bulle.  </li> <br>
						</ol>

						<p> Quand vous aurez trouvé la question appropriée dans la boîte « Questions suggérées », vous pourrez la sélectionner et je vous répondrai dans cette boîte de dialogue.</p> <br>
					</div>`

					assistantTypes(message, true );
				}
			
			
				
			}
		

		
		
		if (textboxMessage != ""){
		var nbQuestions = document.getElementById("questions").getElementsByTagName("button").length;
		var foundKeyword = false;
		var keywordsArray = [];
		userTypes(message);
		console.log("message parts are ", messageParts)
		keywordsArray = populateKeywords();

		

	
		//Filter Questions by Keywords.
		for (let i = 0; i < nbQuestions; i++) {
			

			let a =  keywordsArray[i].join(' ,');;
			console.log("final arrays", a );

			if (isMatchKeywords(messageParts, a)){
				
				if (foundKeyword == false){
					//Since we found a matching keyword, we will hide the answers only 1 time.
					//The only time we will hide all questions.
					hideAllQuestions()
				}
				//foundKeyword will be set to true, see below.
				foundKeyword = true;
				var htmlButton = document.getElementById("questions").getElementsByTagName("button")[i];
				htmlButton.style.visibility = 'visible';
				htmlButton.style.display = 'block';
			}
		}

	

	
				
		if (foundKeyword){

			console.log("Case positive ")
			var message = document.createElement("p");

			if (isEnglish){
				message.innerText = "I think I can help you with that! Please find information related to your keyword or enquiry to the right of this chat box.";
			}else {
				message.innerText = "Je crois pouvoir vous aider avec ceci! Veuillez trouver les informations relatives à votre mot-clé ou à votre demande à la droite de cette boîte de dialogue.";
			}


			//Display List all options
			showAllQuestionsButton();
			
			//Display List of initial options
			showInitialQuestionsButton();
			
			// userTypes(message);
			assistantTypes(message, false);
		}else {
			console.log("Case negative")
			var message = document.createElement("p");
			
			if (isEnglish){
				message.innerText = "I’m sorry, I could not find any information on this. Please try a different keyword or enquiry.";
			}else {
				message.innerText = "  Je suis désolé, je n’ai trouvé aucune information à ce sujet. Veuillez essayer un autre mot-clé ou une autre question. ";
			}
			// userTypes(message);
			assistantTypes(message, false);
		}
	}
	
	//We need to scroll down now as we need to see the user's message.
	//Once the assistant finishes typing, it will scroll down again.
	scrollDownOfDiv("conversationDiv");
}

function isMatchKeywords(messageParts, keywords) {
	
	//Checking if the message sent by user has any matching keywords to our answers.
	for (let i = 0; i < messageParts.length; i++) {
		if (messageParts[i].length > 1){
			var excludedWords = 'de in for';
			var messagePartLcase = messageParts[i].toLowerCase();
			var keywordsLcase = keywords.toLowerCase();
			if (keywordsLcase.search(messagePartLcase) >= 0 && excludedWords.includes(messagePartLcase) == false ){ 
				return true;
			}
		}
	}
	
	return false;
}
//helper function
function showInitialQuestionsButton(){
	var hmtlButton = document.getElementById("initialQuestions")
	hmtlButton.style.visibility = 'visible';
	hmtlButton.style.display = 'block';
}
//helper function
function hideInitialQuestionsButton(){
	var hmtlButton = document.getElementById("initialQuestions")
	hmtlButton.style.visibility = 'hidden';
	hmtlButton.style.display = 'none';
}
//helper function
function showAllQuestionsButton(){
	var hmtlButton = document.getElementById("allQuestions")
	hmtlButton.style.visibility = 'visible';
	hmtlButton.style.display = 'block';
}
//helper function
function hideAllQuestionsButton(){
	var hmtlButton = document.getElementById("allQuestions")
	hmtlButton.style.visibility = 'hidden';
	hmtlButton.style.display = 'none';
}


//THIS IS A FUNCTION RELATED TO THE LIST INITIAL QUESTIONS BUTTON.
function listAllQuestions(){

	displayAllQuestions();	

	console.log("LIST ALL QS console log");
}

//THIS IS A FUNCTION RELATED TO THE LIST INITIAL QUESTIONS BUTTON.
function listInitialQuestions(){
	var nbQuestions = document.getElementById("questions").getElementsByTagName("button").length;

	for (let i = 0; i < nbQuestions; i++) {
		var htmlButton = document.getElementById("questions").getElementsByTagName("button")[i];
		var classList = htmlButton.classList;
		
		if (classList.contains("hidden")){
			//hide
			htmlButton.style.visibility = 'hidden';
			htmlButton.style.display = 'none';
		}
		else{
			//display
			htmlButton.style.visibility = 'visible';
			htmlButton.style.display = 'block';
		}

	}

	showAllQuestionsButton();
	hideInitialQuestionsButton();

	console.log("HELLO");
	
}
//hides all questions
function hideAllQuestions(){
	var nbQuestions = document.getElementById("questions").getElementsByTagName("button").length;
	for (let i = 0; i < nbQuestions; i++) {
		document.getElementById("questions").getElementsByTagName("button")[i].style.visibility = 'hidden';
		document.getElementById("questions").getElementsByTagName("button")[i].style.display = 'none';
	}
}
// displays all questions , initial question button hidden
function displayAllQuestions(){
	var nbQuestions = document.getElementById("questions").getElementsByTagName("button").length;
	for (let i = 0; i < nbQuestions; i++) {
		document.getElementById("questions").getElementsByTagName("button")[i].style.visibility = 'visible';
		document.getElementById("questions").getElementsByTagName("button")[i].style.display = 'block';
	}
	showInitialQuestionsButton();
	hideAllQuestionsButton();
}

function findAnswer(x) {
	var questionElement = document.getElementById("Q" + x.toString());
	var question = document.createElement("p");
	question.innerText = questionElement.innerText;
	userTypes(question);

	var answerElement = document.getElementById("A" + x.toString());
	var answer = document.createElement("p");
	answer.innerHTML = answerElement.innerHTML;

		assistantTypes(answer, true);
	//Scroll down of the div.
	

	
	
	// Scroll down of the div.
	scrollDownOfDiv("conversationDiv");
		// Scroll to the answer element
	
		


}  

function scrollDownOfDiv(DivName){
	//Scroll down of the div.
	var objDiv = document.getElementById(DivName);
	objDiv.scrollTop = objDiv.scrollHeight;
}

function userTypes(elmt){
	elmt.classList.add("bubble");
	elmt.classList.add("user");
	elmt.classList.add("inlineblock");
if(rows == 0){
	 rows = (document.getElementById("QNA").getElementsByTagName("tr").length)
	
	}else{
	rows++;	
	}
	var row = document.getElementById("QNA").insertRow(rows);
	var cell = row.insertCell(0);
	cell.classList.add("userBubble");
	
		
	const img = document.createElement("img");
	img.classList.add("userIcon");
	img.src = "https://raw.githubusercontent.com/EIA-LIT/Assistant/main/user.png";
	img.alt = "";
	const td1 = document.createElement("td");
	
	td1.appendChild(elmt);
	cell.appendChild(td1);

	const td2 = document.createElement("td")
	td2.classList.add("userIconTD")
	td2.appendChild(img);	
	cell.appendChild(td2);
}

function assistantTypes(elmt, withCloseMessage){
	
	elmt.classList.add("bubble");
	elmt.classList.add("assistant");
	elmt.classList.add("inlineblock");
	
	document.getElementById("typingBubble").style.visibility = 'visible';
	document.getElementById("typingBubble").style.display = 'inline';
	

	typingTimeout = setTimeout(() => {
		
	if (isTyping == false){
			isTyping = true
			document.getElementById("typingBubble").style.visibility = 'hidden';
			document.getElementById("typingBubble").style.display = 'none';
			//Create new row, and new celldata, and append answer.

			if(rows == 0){
				rows = (document.getElementById("QNA").getElementsByTagName("tr").length)
			   
			   }else{
			   rows++;	
			   }
		
			var row = document.getElementById("QNA").insertRow(rows);
			var cell = row.insertCell(0);
			
			
			const img = document.createElement("img");
			img.classList.add("userIcon");
			img.src = "https://raw.githubusercontent.com/EIA-LIT/Assistant/main/avatar.png";
			img.alt = "";
			
			const td1 = document.createElement("td");
			td1.classList = "assistantIconTD"
			td1.appendChild(img);
			cell.appendChild(td1);
			
			const td2 = document.createElement("td")
			//assistant will write the answer of the question here.
			td2.appendChild(elmt);
			cell.appendChild(td2);
			
			
			
			if (withCloseMessage){
				add_closeMessage(td2);
			}			
			
			scrollDownOfDiv("conversationDiv");

				// Set focus on the answer element
			td2.setAttribute("tabindex", "0");
			td2.focus();
			td2.scrollIntoView({ behavior: 'smooth', block: 'start' });

		}	
		
	}, 600); 
	isTyping = false
}
// 







//adds the close message (for more assistance, survey)
function add_closeMessage(tdElemt){
	//This code that is commented was to put a note on each answer so to let the user know that they can send an email to NSD
	var message = document.createElement("p");
	message.classList.add("bubble");
	message.classList.add("assistant");
	message.classList.add("inlineblock");
	var nationalLink = document.createElement('a');
	nationalLink.target = 'blank';
	
	if (isEnglish){
		message.innerText = "If you require more assistance, please open a ticket with the  ";
		nationalLink.href = 'https://iservice.prv/eng/imit/nsd/index.shtml';
		nationalLink.textContent = 'National Service Desk';
	}else {
		message.innerText = "Si vous avez besoin d’assistance supplémentaire, veuillez ouvrir un billet auprès de ";
		nationalLink.href = 'https://iservice.prv/fra/giti/isn/index.shtml';
		nationalLink.textContent = 'InfoService national';
	}
		message.appendChild(nationalLink);
		if (isEnglish){
			message.append(" to get in touch with one of the Learning Infrastructure team's resolvers.");
		}else{
			message.append(" pour entrer en contact avec l’un des agents de l’équipe Infrastructure de l’apprentissage.")
		}
		
		
		
		//Start of the Questionnaire code. Comment this block if you want to omit the questionnaire.
		var messageBreak1 = document.createElement("br");
		var messageBreak2 = document.createElement("br")
		message.appendChild(messageBreak1);
		message.appendChild(messageBreak2);
				
		var surveyMessage = document.createElement("p");
		var surveyLink = document.createElement('a');
				
		surveyLink.href = 'https://forms.office.com/Pages/ResponsePage.aspx?id=RljVnoGKRkKs2LGgGr_A0Rpgr_uBAAVNpXqsYz-z7BlUOVg5NDdIVUhDN1g1OEpGNEZVT1RYVlhOQi4u';
		surveyLink.target = 'blank';
				
		if (isEnglish){
			surveyMessage.append("How did I do? Please take this short ");
			surveyLink.textContent = 'survey';
		}else {
			surveyMessage.append("Que pensez-vous de mon travail ? Répondez à ce court ");
			surveyLink.textContent = 'questionnaire';
		}
				
		surveyMessage.appendChild(surveyLink);
		message.append(surveyMessage);
		
		if (isEnglish){
			surveyMessage.append(" to help me improve and serve you better! In the upper right-hand corner of the survey, you will find options to select the language of your choice and/or using the immersive reader.");
		}else {
			surveyMessage.append(" pour m'aider à m'améliorer et à mieux vous servir ! Dans le coin supérieur droit du questionnaire, vous trouverez des options pour sélectionner la langue de votre choix et/ou en utilisant le lecteur immersif.");
		}

	
		
	// 	//adjust the format of the table 
		
		
	// 	var row = document.getElementById("QNA").insertRow(rows);
	// 	var cell = row.insertCell(0);
		
				
	// 	const td1 = document.createElement("td");
	// 	td1.classList = "userIconTD"
	// 	cell.appendChild(td1);
				
	// 	//This appends the note below the answer.
	// 	const td2 = document.createElement("td")
		tdElemt.appendChild(message);
	// 	cell.appendChild(td1);
	// 	cell.appendChild(td2);		
	// 	console.log('rows is',rows) 
	// 	//End  of questionnaire code.
}



/*
The functions down below are used to filter usertypes.
*/


function askUserType(message){
	var break1 = document.createElement("br");
	var break2 = document.createElement("br");
	
	message.append(break1);
	message.append(break2);
	
	var employeeButton = document.createElement("button");
	var managerButton = document.createElement("button");
	var adminButton = document.createElement("button");
	var instructorButton = document.createElement("button")
	var contentButton = document.createElement("button")
	employeeButton.classList.add("bubble");
	employeeButton.classList.add("question");
	employeeButton.classList.add("bold")
	managerButton.classList.add("bubble");
	managerButton.classList.add("question");
	managerButton.classList.add("bold");
	adminButton.classList.add("bubble");
	adminButton.classList.add("question");
	adminButton.classList.add("bold");
	instructorButton.classList.add("bubble");
	instructorButton.classList.add("question");
	instructorButton.classList.add("bold");

	contentButton.classList.add("bubble");
	contentButton.classList.add("question");
	contentButton.classList.add("bold");
	
	

	// ENG: Content Administrator
//FR: Administrateur de contenu 



	if (isEnglish){
		employeeButton.innerText = "Learner";
		managerButton.innerText = "Manager (and team leader)";
		adminButton.innerText = "Administrator";
		instructorButton.innerText = "Instructor";
		contentButton.innerText = "Content Administrator";
	}else{
		employeeButton.innerText = "Apprenant(e)" ;
		managerButton.innerText = "Responsable (gestionnaire et chef d'équipe)";
		adminButton.innerText = "Administrateur/Administratrice";
		instructorButton.innerText = "Formateur/Formatrice";
		contentButton.innerText = "Administrateur/Administratrice de contenu";
	}
	
	employeeButton.onclick = function(){
		setUser(1);
		//filterQuestionsByUserType();
	};
	
	managerButton.onclick = function(){
		setUser(2);
		//filterQuestionsByUserType();
	};
	
	adminButton.onclick = function(){
		setUser(3);
		//filterQuestionsByUserType();
	};
	instructorButton.onclick = function(){
		setUser(4);
		//filterQuestionsByUserType();
	};

	contentButton.onclick = function(){
		setUser(5);
	}
	
	message.append(employeeButton);
	message.append(managerButton);
	message.append(adminButton);
	message.append(instructorButton);
	message.append(contentButton);
	assistantTypes(message);
	
}

function setUser(userTypeInt){
	//These should match the exact class names!
	if (userTypeInt == 1){
		userType = "employee";
	}
	if (userTypeInt == 2){
		userType = "manager";
	}
	if (userTypeInt == 3){
		userType = "admin";
	}

	if (userTypeInt == 4){
		userType = "instructor";
	}

	if (userTypeInt == 5){
		userType = "content";
	}
	filterQuestionsByUserType();
}

function filterQuestionsByUserType(){
	var nbQuestions = document.getElementById("questions").getElementsByTagName("button").length;


	for (let i = 0; i < nbQuestions; i++) {
		
		var htmlButton = document.getElementById("questions").getElementsByTagName("button")[i];
		var classes = htmlButton.classList;
		
		if (classes.contains("employee") || classes.contains("manager") || classes.contains("admin") || classes.contains("instructor") || classes.contains("content") ){
			if (classes.contains(userType)){
				//We display it for the user.
				//Leave empty as we display all questions by default.
				htmlButton.style.visibility = 'visible';
				htmlButton.style.display = 'block';
			} else{
				
				//We hide it as this is not a generic question.
				htmlButton.style.visibility = 'hidden';
				htmlButton.style.display = 'none';
			}
		}else{
			//This is a generic question
			//Leave this blank on purpose.
		}
	}
}


// popaulate key words and return new array with keywords that include words from the question

function populateKeywords(){

	const newArray = [];
	const questionsArray = [];
	const answerArray = [];



	let length = document.getElementById("questions").getElementsByTagName("button").length;

	for (let i = 0; i< length ; i++){

		var keywords = document.getElementById("questions").getElementsByClassName("keywords")[i].innerText;
		
		let questions = document.getElementById("questions").querySelectorAll("button")[i].innerText;

		let answers = document.getElementById("answers").querySelectorAll("div")[i].innerText;

		// let splitQuestions = splitandFilter(questions);
		
		//store new keywords in array (comprised of old key words , and filtered words from the questions )
		let  newkeywords = [keywords];


		
	

		newArray.push(newkeywords);
		questionsArray.push(questions);
		answerArray.push(answers)


		
	}



	// console.log('updated Key Word Array is', newArray);
	// console.log('updated questions Array is', questionsArray);
	// console.log('updated answers Array is', answerArray);

	keywordJSON = newArray;
	questionJSON = questionsArray;
	answerJSON = answerArray;

	

	var convertedtoJSON = JSON.stringify(keywordJSON);

	// console.log("keyword JSON is", convertedtoJSON);

	var convertedtoJSONquestion = JSON.stringify(questionJSON);

	// console.log("question JSON is" , convertedtoJSONquestion);

	var convertedtoJSONanswers = JSON.stringify(answerJSON);


	return newArray;

}

//function to split the questions and filter certain words
function splitandFilter(word){
	let result = word.split(' ');

	const wordsToExclude = ["How \n", "can", "I", "do","when","a","for", "de","of", "my", "in","to", "is", "fcbar, soccer"];


	const updatedResult = result.filter((word)=>{
		return !wordsToExclude.includes(word);
	})

	return updatedResult;
}





















var isEnglish = true;
var typingTimeout;
var isTyping = false;

var userType = "";


//General approach: We usually display all questions, and then hide as we go.
//We do NOT do the opposite: hiding all, display questions as we go.

function init(){
	setLanguage();
	displayIntroMessage();
	popaulateKeywords();
}

function setLanguage(){
	var language = document.getElementById("language").innerText;
	
	if (language == ""){
		var ENLength = document.getElementsByClassName("EN").length;
		isEnglish = ENLength;
	} else {
		//On the website, so the language is not hidden
		if (language == "Français"){
			isEnglish = true;
		} else {
			//Used to be false.
			isEnglish = false;
		}
	}
	
}


const pointAEng = " 1) To find all predetermined questions, select the View all questions button, located directly in the “Suggested Questions” box on the right.";
const pointBEng =  " 2) To filter the questions by keyword, enter one or several keywords or an enquiry in the message field below.";
const pointCtEng = "3) To filter the questions by role, select the role related to your question directly in this bubble."

function displayIntroMessage(){
	var message = document.createElement("p");
	if (isEnglish){
		message.innerText = "Hello, I am your Saba Virtual Assistant!\n\nTo begin, you can filter my questions in three ways:\n\n1) To find all predetermined questions, select the View all questions button, located directly in the “Suggested Questions” box on the right\n\n2) To filter the questions by keyword, enter one or several keywords or an enquiry in the message field below.\n\n3) To filter the questions by role, select the role related to your question directly in this bubble.\n\nOnce you find the appropriate question in the “Suggested Questions” box, you can select it and I will answer in this chat box.";
	}else {
		message.innerText = "Bonjour, je suis votre spécialiste en assistance virtuelle !\n\nPour commencer, vous pouvez filtrer mes questions de trois façons:\n\n1) Pour trouver toutes les questions prédéterminées, sélectionnez le bouton Afficher toutes les questions, situé dans la boîte « Questions suggérées » à droite.\n\n2) Pour filtrer les questions par mot-clé, saisissez un ou plusieurs mots-clés ou une question dans le champ de message ci-dessous.\n\n3) Pour filtrer les questions par rôle, sélectionnez le rôle lié à votre question directement dans cette bulle.\n\nQuand vous aurez trouvé la question appropriée dans la boîte « Questions suggérées », vous pourrez la sélectionner et je vous répondrai dans cette boîte de dialogue.";
	}
	askUserType(message);
	
	assistantTypes(message, false);
}

//when a user press enter in the textbox, it will fire this function.
function sendMessage(){
	
	//textbox is the message bar.
	var textboxMessage = document.getElementById("textbox").value;



	if (textboxMessage != ""){
		
		//Split the message by parts to search for keywords.
		var messageParts = textboxMessage.split(" ");

		var message = document.createElement("p");
		message.innerText = textboxMessage;
		userTypes(message);
		document.getElementById("textbox").value = "";
	
		var nbQuestions = document.getElementById("questions").getElementsByTagName("button").length;
		var foundKeyword = false;
		var keywordsArray = [];

			keywordsArray = popaulateKeywords();
	
		//Filter Questions by Keywords.
		for (let i = 0; i < nbQuestions; i++) {
			// var keywords = (document.getElementById("questions").getElementsByClassName("keywords")[i].innerText);

			let a =  keywordsArray[i].join(' ');;

			console.log("Keywords Array: ", a);
			
			
			// keywords = popaulateKeywords;
			// console.log("line send message: ",keywords);

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

		if(textboxMessage.value === "hello" || "hi" || "hi there" || " hey" ||"greetings"|| " salutations" ||"howdy"|| "what's up" ||  "yo" || "hiya" ||"how are you" ||"how's it going"
		|| "hello" || "hi" || "hi there" || " hey" ||"greetings"|| " salutations" ||"howdy"|| "what's up" ||  "yo" || "hiya" ||"how are you" ||"how's it going" ||
		"Allô" ||  "allo" || "salut" || "bonjour" || "bonsoir" || "coucou" || "salutations" ||"ça va" || "ca va" || "hey" || "yo"
		){
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
						</div>`
						
				

				
			assistantTypes(message, true);
			}else{
				message.innerHTML = 
				`
				<div class ="black">
					<p class="black">Bienvenue sur ma page!  </p> <br>

					<p> I was given a predetermined list of frequently asked questions and answers to help you with anything Saba-related. </p> <br>


					<p>Pour commencer, vous pouvez filtrer mes questions de trois façons:  </p> <br>
					<ol>
						<li> Pour trouver toutes les questions prédéterminées, sélectionnez le bouton Afficher toutes les questions, situé dans la boîte « Questions suggérées » à droite.  </li> <br>
						<li>Pour filtrer les questions par mot-clé, saisissez un ou plusieurs mots-clés ou une question dans le champ de message ci-dessous.   </li> <br>
						<li>Pour filtrer les questions par rôle, sélectionnez le rôle lié à votre question directement dans cette bulle.  </li> <br>
					</ol>;
				</div>`
				


				
			assistantTypes(message, true);
			}
		}
		
		if (foundKeyword){
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
			
			
			assistantTypes(message, false);
		}else {
			var message = document.createElement("p");
			
			if (isEnglish){
				message.innerText = "I’m sorry, I could not find any information on this. Please try a different keyword or enquiry.";
			}else {
				message.innerText = "Je suis désolé, je n’ai trouvé aucune information à ce sujet. Veuillez essayer un autre mot-clé ou une autre question. ";
			}
			
			assistantTypes(message, true);
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
			var messagePartLcase = messageParts[i].toLowerCase();
			var keywordsLcase = keywords.toLowerCase();
			if (keywordsLcase.search(messagePartLcase) >= 0 ){ 
				return true;
			}
		}
	}
	
	return false;
}

function showInitialQuestionsButton(){
	var hmtlButton = document.getElementById("initialQuestions")
	hmtlButton.style.visibility = 'visible';
	hmtlButton.style.display = 'block';
}

function hideInitialQuestionsButton(){
	var hmtlButton = document.getElementById("initialQuestions")
	hmtlButton.style.visibility = 'hidden';
	hmtlButton.style.display = 'none';
}

function showAllQuestionsButton(){
	var hmtlButton = document.getElementById("allQuestions")
	hmtlButton.style.visibility = 'visible';
	hmtlButton.style.display = 'block';
}

function hideAllQuestionsButton(){
	var hmtlButton = document.getElementById("allQuestions")
	hmtlButton.style.visibility = 'hidden';
	hmtlButton.style.display = 'none';
}

//THIS IS A FUNCTION RELATED TO THE LIST INITIAL QUESTIONS BUTTON.
function listAllQuestions(){
	displayAllQuestions();	
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
	
}

function hideAllQuestions(){
	var nbQuestions = document.getElementById("questions").getElementsByTagName("button").length;
	for (let i = 0; i < nbQuestions; i++) {
		document.getElementById("questions").getElementsByTagName("button")[i].style.visibility = 'hidden';
		document.getElementById("questions").getElementsByTagName("button")[i].style.display = 'none';
	}
}

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
	scrollDownOfDiv("conversationDiv");
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

	var rows = document.getElementById("QNA").getElementsByTagName("tr").length;
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
			var rows = document.getElementById("QNA").getElementsByTagName("tr").length;
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
				add_closeMessage();
			}			
			
			scrollDownOfDiv("conversationDiv");
		}
		
	}, 600); 
	isTyping = false
}

//adds the close message (for more assistance, survey)
function add_closeMessage(){
	//This code that is commented was to put a note on each answer so to let the user know that they can send an email to NSD
	var message = document.createElement("p");
	message.classList.add("bubble");
	message.classList.add("assistant");
	message.classList.add("inlineblock");
	var nationalLink = document.createElement('a');
	nationalLink.target = 'blank';
	
	if (isEnglish){
		message.innerText = "If you require more assistance, contact the ";
		nationalLink.href = 'https://iservice.prv/eng/imit/nsd/index.shtml';
		nationalLink.textContent = 'National Service Desk';
	}else {
		message.innerText = "Si vous avez besoin d’assistance supplémentaire, communiquez avec l'";
		nationalLink.href = 'https://iservice.prv/fra/giti/isn/index.shtml';
		nationalLink.textContent = 'InfoService national';
	}
		message.appendChild(nationalLink);
		message.append(".");
		
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
		
		//adjust the format of the table 
		var rows = document.getElementById("QNA").getElementsByTagName("tr").length;
		var row = document.getElementById("QNA").insertRow(rows);
		var cell = row.insertCell(0);
				
		const td1 = document.createElement("td");
		td1.classList = "userIconTD"
		cell.appendChild(td1);
				
		//This appends the note below the answer.
		const td2 = document.createElement("td")
		td2.appendChild(message);
		cell.appendChild(td1);
		cell.appendChild(td2);		
		//End  of questionnaire code.
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
	employeeButton.classList.add("bubble");
	employeeButton.classList.add("question");
	managerButton.classList.add("bubble");
	managerButton.classList.add("question");
	adminButton.classList.add("bubble");
	adminButton.classList.add("question");
	
	

	// 

	if (isEnglish){
		employeeButton.innerText = "Learner";
		managerButton.innerText = "Manager";
		adminButton.innerText = "Administrator";
	}else{
		employeeButton.innerText = "Apprenant(e)" ;
		managerButton.innerText = "Responsable (gestionnaire, chef d'équipe)";
		adminButton.innerText = "Administrateur/Administratrice";
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
	
	message.append(employeeButton);
	message.append(managerButton);
	message.append(adminButton);
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
	filterQuestionsByUserType();
}

function filterQuestionsByUserType(){
	var nbQuestions = document.getElementById("questions").getElementsByTagName("button").length;


	for (let i = 0; i < nbQuestions; i++) {
		
		var htmlButton = document.getElementById("questions").getElementsByTagName("button")[i];
		var classes = htmlButton.classList;
		
		if (classes.contains("employee") || classes.contains("manager") || classes.contains("admin")){
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

function popaulateKeywords(){

	const newArray = [];

	let length = document.getElementById("questions").getElementsByTagName("button").length;

	for (let i = 0; i< length ; i++){

		var keywords = document.getElementById("questions").getElementsByClassName("keywords")[i].innerText;
		
		let questions = document.getElementById("questions").querySelectorAll("button")[i].innerText;

		let splitQuestions = splitandFilter(questions);
		
		//store new keywords in array (comprised of old key words , and filtered words from the questions )
		let  newkeywords = [keywords,...splitQuestions];
	

		newArray.push(newkeywords);

		
	}


	console.log('updated Array is', newArray);


	return newArray;



}

//function to split the questions and filter certain words
function splitandFilter(word){
	let result = word.split(' ');

	const wordsToExclude = ["How", "can", "I", "do","when","a","for"];


	const updatedResult = result.filter((word)=>{
		return !wordsToExclude.includes(word);
	})

	return updatedResult;
}










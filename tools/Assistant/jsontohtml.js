// get JSON to HTML

const questionContainer = document.querySelector('#questions');

const answersDiv = document.querySelector('#answers');


function fetchJSONData(){
    fetch('./output.json').then(res=> res.json())

.then(data=> {

    data.forEach(question=>{
        let id = question.questionNumber;

        const questionDiv = document.createElement('button');
        questionDiv.classList.add('question');
        questionDiv.classList.add('bubble');
        questionDiv.classList.add('default');
        questionDiv.setAttribute('id',`Q${id}`);


        
        //add question to content
        questionDiv.textContent = `Question : ${question.QuestionEN}`;
       


        // create paragraph for keyword

        const keywordParagraph = document.createElement('p');

        keywordParagraph.textContent = `${question.KeywordsEN}`;
        keywordParagraph.classList.add('keywords');
        keywordParagraph.style.display = 'none';


        //add both elements to questions div 


        questionContainer.appendChild(questionDiv);
        questionContainer.appendChild(keywordParagraph)
        //create answer paragraph

        // const answerPara = document.createElement('p');

        // answerPara.textContent = `${question.AnswerEN}`;
        // // answerPara.trim();
        // answerPara.classList.add('answer');

        // // adding answer to container

        // answerContainer.appendChild(answerPara);

        


    });

        // paragraph for key words
    }).catch(error=>console.error('error ', error));
    



    console.log(data);


}
fetchJSONData();
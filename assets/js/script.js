// create the data store for retrieved questions
let questionsData = {};

// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {
    // add instructions modal event listeners
    let instructionsOpenButton = document.getElementById('instructions-btn');
    let instructionsCloseButton = document.getElementById('close-instructions-btn');

    instructionsOpenButton.addEventListener('click', openInstructions);
    instructionsCloseButton.addEventListener('click', closeInstructions);

    // add beginQuiz event listener to the 'Play' buttons
    let quickPlayButton = document.getElementById('quick-play-btn');
    quickPlayButton.addEventListener('click', beginQuiz);
})

// event listeners to open and close the instructions modal
function openInstructions() {
    let instructions = document.getElementById('instructions-modal');
    instructions.showModal();
}

function closeInstructions() {
    let instructions = document.getElementById('instructions-modal');
    instructions.close();
}

// call question api and retrieve 15 random questions
async function retrieveQuestions(categories) {
    // build api call, default to 15 questions no category
    const apiBaseURL = 'https://the-trivia-api.com/v2/questions';
    let apiURL = `${apiBaseURL}?limit=15`;
    if (categories) { apiURL += `&categories=${categories}`; }
    
    const apiResponse = await fetch(apiURL);

    // handle call failure
    if (apiResponse.status === 200) {
        questionsData = await apiResponse.json();
        writeQuestion(0);
    } else {
        // add error page here
        console.log('API call failed');
    }
}

// begin the quiz - retrieve the questions and load up the first question
// future: add code to reshape the page
function beginQuiz(categories) {
    retrieveQuestions(categories);

    // rearrange the screen for the quiz

    // set the scores to 0
    let scoreTracker = document.getElementById('score-tracker');
    scoreTracker.innerHTML = '0';
}

// given an index write a question to the page
function writeQuestion(questionIndex) {
    let questionData = questionsData[questionIndex];

    // write question text to qText
    let qText = document.getElementById('question-text');
    qText.innerHTML = questionData.question.text;

    // collect correct and incorrect answers together and sort alphabetically
    let answersList = [questionData.correctAnswer, ...questionData.incorrectAnswers];
    answersList.sort();
    
    // write the answers list to the option areas in alphabetical order
    for (let [index, answer] of answersList.entries()) {
        // retrieve the option element and update
        let option = document.getElementById(`answer-${index}`);
        option.innerHTML = answer;
    }
}

// 

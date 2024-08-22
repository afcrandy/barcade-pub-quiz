// create the data store for retrieved questions
let quiz = {};

// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {
    // add instructions modal event listeners
    let instructionsOpenButton = document.getElementById('instructions-btn');
    let instructionsCloseButton = document.getElementById('close-instructions-btn');

    instructionsOpenButton.addEventListener('click', openInstructions);
    instructionsCloseButton.addEventListener('click', closeInstructions);

    // add beginQuiz event listener to the 'Play' buttons
    let quickPlayButton = document.getElementById('quick-play-btn');
    quickPlayButton.addEventListener('click', quickPlay);
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
        quiz.questionsData = await apiResponse.json();
        writeQuestion(0);
    } else {
        // add error page here
        console.log('API call failed');
    }
}

// begin the quiz - retrieve the questions and load up the first question
// future: add code to reshape the page
function beginQuiz(categories) {
    // set score to 0 and question number to 1
    quiz.score = 0;
    quiz.questionNumber = 1;

    // retrieve questions from the api
    retrieveQuestions(categories);

    // rearrange the screen for the quiz

    // set the scores to 0
    let scoreTracker = document.getElementById('score-tracker');
    scoreTracker.innerHTML = quiz.score;
}

// begin a quiz game with no category specified
function quickPlay() {
    beginQuiz();
}

// given an index write a question to the page
function writeQuestion(questionIndex) {
    let questionData = quiz.questionsData[questionIndex];

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

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

    // selectOption event listener on all options
    let answerOptions = document.getElementsByClassName('answer');
    for (const answerOption of answerOptions) {
        answerOption.addEventListener('click', selectOption);
    }
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

    // write the score
    writeScore();

    // rearrange the screen for the quiz
    arrangeQuestionPage();
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

// sets classes to rearrange page for questions
function arrangeQuestionPage() {
    console.log('placeholder - arrangeQuestionPage()');
}

// listener for when an option is selected
function selectOption() {
    // style selected option using the 'selected-option' class
    this.classList.add('selected-option');
    alert(`you selected ${this.innerHTML}`);

    // disable all option buttons
    let optionsBox = document.getElementById('answers');
    optionsBox.classList.add('option-selected');

    // check answer and after 0.5s delay feedback to user
    let answeredCorrectly = checkAnswer(this.innerHTML);
    setTimeout(feedbackRoundToUser, 500, answeredCorrectly);

    // enable 'Next' button
    let nextButton = document.getElementById('next-btn');
    nextButton.classList.remove('btn-disabled');
}

// check selected answer and feedback to user
function checkAnswer(selectedAnswer) {
    // compare selectedAnswer with correct answer in the quiz object
    let currentQuestion = quiz.questionsData[quiz.questionNumber - 1]
    let answeredCorrectly = selectedAnswer === currentQuestion.correctAnswer;

    // return if user answered correctly
    return answeredCorrectly;
}

// increment the score on the quiz object
function incrementScore() {
    quiz.score += 1;
    writeScore();
}

// write the score
function writeScore() {
    let scoreTracker = document.getElementById('score-tracker');
    scoreTracker.innerHTML = quiz.score;
}

// provide feedback to the user about the results of this round
function feedbackRoundToUser(didUserAnswerCorrectly) {
    // if correct increment score
    if (didUserAnswerCorrectly) { incrementScore(); }
    
    // style the correct answer
    // retrieve the correct answer from the quiz object
    // find the .answer element containing it and apply the correct-answer class
    
    // if different to selected answer, apply some style to that answer too using incorrect-answer class
    if (!didUserAnswerCorrectly) {
        let selectedAnswer = document.getElementsByClassName('selected-option')[0];
        selectedAnswer.classList.add('incorrect-answer');
    }
}

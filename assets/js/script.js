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

    // expose the category selector dropdown
    let selectCategoryBtn = document.getElementById('select-category-btn');
    selectCategoryBtn.addEventListener('click', showCategorySelector);

    // beginCategoryQuiz on the play-category-btn
    let categoryPlayBtn = document.getElementById('play-category-btn');
    categoryPlayBtn.addEventListener('click', beginCategoryQuiz);

    // selectOption event listener on all options
    let answerOptions = document.getElementsByClassName('answer');
    for (const answerOption of answerOptions) {
        answerOption.addEventListener('click', selectOption);
    }

    // apply the clickNextButton function to the 'Next' button
    let nextButton = document.getElementById('next-btn');
    nextButton.addEventListener('click', clickNextButton);

    // add returnToHomePage to listeners on 'home-btn' and 'exit-quiz-btn'
    let homeBtn = document.getElementById('home-btn');
    let exitQuizBtn = document.getElementById('exit-quiz-btn');
    for (const btn of [homeBtn, exitQuizBtn]) {
        btn.addEventListener('click', returnToHomePage);
    }

    // add a reset of the category select dropdown for the back button
    let backBtn = document.getElementById('back-btn');
    backBtn.addEventListener('click', function() {
        // reset dropdown
        resetCategorySelectDropdown();
        returnToHomePage();
    });
});

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
// adapted from equivalent function in https://github.com/kera-cudmore/TheQuizArms
async function retrieveQuestions(categories) {
    // build api call, default to 15 questions no category
    const apiBaseURL = 'https://the-trivia-api.com/v2/questions';
    let apiURL = `${apiBaseURL}?limit=15`;
    if (categories) { apiURL += `&categories=${categories}`; }
    
    const apiResponse = await fetch(apiURL);

    // handle call failure
    if (apiResponse.status === 200) {
        quiz.questionsData = await apiResponse.json();
        writeQuestion();
    } else {
        // add error page here
        console.log('API call failed');
        window.location.assign('500.html');
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
function writeQuestion() {
    let currentQuestion = quiz.questionsData[quiz.questionNumber - 1];

    // write question text to qText
    let qText = document.getElementById('question-text');
    qText.innerHTML = currentQuestion.question.text;

    // collect correct and incorrect answers together and sort alphabetically
    let answersList = [currentQuestion.correctAnswer, ...currentQuestion.incorrectAnswers];
    answersList.sort();
    
    // write the answers list to the option areas in alphabetical order
    for (let [index, answer] of answersList.entries()) {
        // retrieve the option element and update
        let option = document.getElementById(`answer-${index}`);
        option.innerHTML = answer;
        option.dataset.answer = answer;
    }
}

// sets classes to rearrange page for questions
function arrangeQuestionPage() {
    setPageTo('question');
}

// listener for when an option is selected
function selectOption() {
    // style selected option using the 'selected-option' class
    this.classList.add('selected-option');

    // disable all option buttons
    let optionsBox = document.getElementById('answers');
    optionsBox.classList.add('option-selected');

    // check answer and after 0.5s delay feedback to user
    let answeredCorrectly = checkAnswer(this.textContent);
    setTimeout(feedbackRoundToUser, 500, answeredCorrectly);
}

// check selected answer and feedback to user
function checkAnswer(selectedAnswer) {
    // compare selectedAnswer with correct answer in the quiz object
    let currentQuestion = quiz.questionsData[quiz.questionNumber - 1];
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
    let finalScore = document.getElementById('final-score');

    for (const scoreElem of [scoreTracker, finalScore]) {
        scoreElem.innerHTML = quiz.score;
    }
}

// provide feedback to the user about the results of this round
function feedbackRoundToUser(didUserAnswerCorrectly) {
    let selectedOption = document.getElementsByClassName('selected-option')[0];
    
    // enable 'Next' button
    let nextButton = document.getElementById('next-btn');
    nextButton.classList.remove('btn-disabled');
    
    // if correct increment score
    if ( didUserAnswerCorrectly ) {
        incrementScore();
        selectedOption.classList.add('correct-answer');
    } else {
        // apply some style to selected answer using incorrect-answer class
        selectedOption.classList.add('incorrect-answer');

        // find the .answer element containing the correct answer and apply the correct-answer class
        let correctAnswer = quiz.questionsData[quiz.questionNumber - 1].correctAnswer;
        let correctOption = document.querySelector(`.answer[data-answer="${correctAnswer}"]`);
        correctOption.classList.add('correct-answer');
    }
}

// user clicks either the 'Next' or 'Submit' button, run the correct set of code
// dependinbg on whether currentQuestion is the last or not
function clickNextButton() {
    // reset question page functionality and styling
    resetQuestionPage();
    
    // if currentQuestion is not the last one, reset and go again
    if ( quiz.questionNumber < 15 ) {
        // questions remain, go to next round
        nextRound();

        // if this was the penultimate question change text on 'Next' button for final question
        if ( quiz.questionNumber === 15 ) { document.getElementById('next-btn').innerHTML = "See your results"; }
    } else {
        // trigger Results page
        arrangeResultsPage();
    }
}

// removes or adds classes where necessary to restore original question page functionality
function resetQuestionPage() {
    // remove the 'selected-option' class
    let selectedOption = document.getElementsByClassName('selected-option')[0];
    if ( selectedOption ) { selectedOption.classList.remove('selected-option'); }
    
    // remove the 'option-selected' class
    let answersBox = document.getElementById('answers');
    if ( answersBox ) { answersBox.classList.remove('option-selected'); }

    // remove the 'incorrect-answer' and 'correct-answer' classes, if they exist
    let incorrectAnswer = document.getElementsByClassName('incorrect-answer')[0],
        correctAnswer = document.getElementsByClassName('correct-answer')[0];
    if ( incorrectAnswer ) { incorrectAnswer.classList.remove('incorrect-answer'); }
    if ( correctAnswer ) { correctAnswer.classList.remove('correct-answer'); }

    // disable 'Next' button
    let nextButton = document.getElementById('next-btn');
    nextButton.classList.add('btn-disabled');

    // reset 'Next' button text in case where game has finished
    nextButton.innerHTML = "Next";
}

// when the user clicks next
function nextRound() {
    // increment quiz.questionNumber
    quiz.questionNumber += 1;

    // write the next question to the page
    writeQuestion();
}

// take user to the results page where they can see final score, and go home or start another game
function arrangeResultsPage() {
    setPageTo('results');
}

// return to the homepage - clear styling and arrange the page
function returnToHomePage() {
    // clear the question page of styling should user begin a new quiz
    resetQuestionPage();

    // rearrange the page for Home
    setPageTo('homepage');
}

// expose the select a category dropdown
function showCategorySelector() {
    setPageTo('cat-select');
}

// begin a game with a selected category, if one has been selected
function beginCategoryQuiz() {
    // retrieve the value of 'quiz-category' dropdown
    let categorySelector = document.getElementById('quiz-category');
    let selectedCategory = categorySelector.value;
    
    // beginQuiz passing in the category selected
    beginQuiz(selectedCategory);
}

// sets the class on the body element to move the page through the different screens of the game
function setPageTo(screenClass) {
    let screenDiv = document.getElementById('screen');

    // remove any classes on the body element
    for (const screenName of ['homepage', 'question', 'results', 'cat-select']) {
        screenDiv.classList.remove(screenName);
    }
    
    // add the screen param as the new class
    screenDiv.classList.add(screenClass);
}

// reset the category select dropdown to the default (first) value
function resetCategorySelectDropdown() {
    let categorySelect = document.getElementById('quiz-category');
    // set to the value with index 0
    categorySelect.selectedIndex = 0;
}

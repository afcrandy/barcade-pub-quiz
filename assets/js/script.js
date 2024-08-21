// create the data store for retrieved questions
let questionData = {};

// Wait for the DOM to finish loading
document.addEventListener("DOMContentLoaded", function() {
    // add instructions modal event listeners
    let instructionsOpenButton = document.getElementById('instructions-btn');
    let instructionsCloseButton = document.getElementById('close-instructions-btn');

    instructionsOpenButton.addEventListener('click', openInstructions);
    instructionsCloseButton.addEventListener('click', closeInstructions);
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
        questionData = await apiResponse.json();
    } else {
        // add error page here
        console.log('API call failed');
    }
}

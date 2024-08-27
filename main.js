//Question, answer, and question count arrays
let question = ['What player holds the all-time scoring record?', 'What player holds the all-time assist record?', 'What player has the most career games?',
    'What player has the most career steals?', 'What player has the most career offensive rebounds?', 'What player has the most career defensive rebounds?',
    'What player has the most career rebounds overall?', 'What player has the most career blocks?', 'What player has the most career personal fouls?', 'What player has the most career FGM?',
    'What player has the most career FGA?', 'What player has the highest career FG%', 'What player has the most career 3 pointers made?', 'What player has the most career 3PA?',
    'What player has the highest career 3P%?', 'What player has the most career FTM?', 'What player has the most career FTA?', 'What player has the highest career FT%',
    'What player has the most career turnovers?']
let correctAnswer = ['LeBron James', 'John Stockton', 'Robert Parish', 'John Stockton', 'Moses Malone', 'Kevin Garnett', 'Wilt Chamberlain', 'Hakeem Olajuwon', 'Kareem Abdul-Jabbar',
    'Kareem Abdul-Jabbar', 'LeBron James', 'DeAndre Jordan', 'Stephen Curry', 'Stephen Curry', 'Steve Kerr', 'Karl Malone', 'Karl Malone', 'Stephen Curry', 'LeBron James']

//Setting the first question presented to the first question in the 'question' array
let currentQuestion = 0;

//Presents question 
function presentQuestion() {
    let questionElement = document.getElementById('question')
    questionElement.textContent = question[currentQuestion];
}

presentQuestion();

//Question counter functionality 
function updateQuestionCounter() {
    document.getElementById('question-counter-area').textContent = currentQuestion + 1;
}

//Checks answers and continues to next question
function checkAnswer() {
    let answerElement = document.getElementById('answer-box').value;
    let currentCorrectAnswer = correctAnswer[currentQuestion];

    //Makes sure answer is correct before continuing to next question
    if (answerElement === currentCorrectAnswer) {
        currentQuestion++;
        updateQuestionCounter();
        document.getElementById('answer-box').value = '';
    } else {
        incorrectAnswer();
        openPopup();
    }

    //Ends the quiz if last question is completed, checks to see if another question is available to present
    if (currentQuestion < question.length) {
        presentQuestion();
    } else {
        openFinishedPopup();
    }
}

//Creates paragraph with message when wrong answer is submitted, and clears answer box
function incorrectAnswer() {
    document.getElementById('answer-box').value = '';
    document.getElementById('answer-box').focus();
}

//Listens for submit button to be clicked, if clicked runs checkAnswer function
let submitButton = document.getElementById('submitbtn');

submitButton.addEventListener('click', checkAnswer);

//Wrong answer popup functionality
let closeWrongPopup = document.getElementById('closewrongbtn');
closeWrongPopup.addEventListener('click', closePopup);

let popup = document.getElementById('incorrect-popup')

//Finished Quiz popup functionality

let finishedPopup = document.getElementById('finished-popup');

let closeFinishedPopup = document.getElementById('closefinishedbtn')
finishedPopup.addEventListener('click', closePopup)

function openFinishedPopup() {
    finishedPopup.classList.add('open-popup');
    console.log(finishedPopup);
}

//Functions for popup functionality 
function openPopup() {
    popup.classList.add('open-popup');
}

function closePopup() {
    popup.classList.remove('open-popup')
}

function appendfinishpopup() {
    popup.classList.add('open-popup');
}

const startBtn = document.querySelector('#startButton');
const startPage = document.querySelector('#startingPage');
const questionWrapper = document.querySelector('#question-wrapper');
const questionHeader = document.querySelector('#question-header');
const choicesEL = document.querySelector('#choices');
let secondsLeft = document.querySelector('#timeLeft')

let sec = 75;
let currentQuestionIndex = 0;
let score = 0;

startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    startPage.classList.add('hide');
    questionWrapper.classList.remove('hide');

    timerEL = setInterval(timer, 1000);
    secondsLeft.textContent = sec;

    showQuestions();
};

function showQuestions() {
    let currentQuestion = questionsArray[currentQuestionIndex];
    questionHeader.textContent = currentQuestion.question;
    choicesEL.innerHTML = '';

    currentQuestion.choices.forEach(function(choice) {
     
     let choicesButton = document.createElement('button');
     choicesButton.textContent= choices;
     choicesButton.classList.add('btn')
     choicesButton.addEventListener('click', event);
     choicesEL.appendChild(choicesButton);
     });
}

function timer() {
    sec--;
    secondsLeft.textContent = sec;
    if (sec <= 0) {
        alert("Time Over");
        clearInterval(timerEL)
    }
};
const startBtn = document.querySelector('#startButton');
const startPage = document.querySelector('#startingPage');
const questionWrapper = document.querySelector('#question-wrapper');
const questionHeader = document.querySelector('#question-header');
const choicesEL = document.querySelector('#choices');
let secondsLeft = document.querySelector('#timeLeft');
const endQuiz = document.querySelector('#endQuiz');
let scoreEL = document.querySelector('#score');
const scoreInitials = document.querySelector('#scoreInitials')
const submitButton = document.querySelector('#submitBtn')

let sec = 75;
let currentQuestionIndex = 0;
let score= 0;
let highScores = [];


startBtn.addEventListener('click', startQuiz);

function startQuiz() {
    startButton.classList.add('hide');
    startPage.classList.add('hide');
    questionWrapper.classList.remove('hide');

    timerEL = setInterval(timer, 1000);
    secondsLeft.textContent = "Time:" + sec;

    showQuestions();
};

function showQuestions() {
    let currentQuestion = questionsArray[currentQuestionIndex];
    questionHeader.textContent = currentQuestion.question;
    choicesEL.innerHTML = '';

    currentQuestion.choices.forEach(function(choice) {
     
     let choicesButton = document.createElement('button');
     choicesButton.setAttribute('value', choice);
     choicesButton.textContent= choice;
     choicesButton.classList.add('btn')
     choicesButton.addEventListener('click', answerCheck);
     choicesEL.appendChild(choicesButton);
     })
};

function answerCheck() {
    if (this.value == questionsArray[currentQuestionIndex].answer) {
        score++;

    } else if (this.value !== questionsArray[currentQuestionIndex].answer) {
        sec -= 15;
        
    }
        currentQuestionIndex ++;

        if(currentQuestionIndex === questionsArray.length) {
            showScore();
        } else {
            showQuestions();
        }
};

function showScore() {
    clearInterval(timerEL);
    endQuiz.classList.remove('hide');
    questionWrapper.classList.add('hide');
    scoreEL.innerHTML = "You answered " + score + " out of " + questionsArray.length + " correctly!"
};

function timer() {
    sec--;
    secondsLeft.textContent = "Time:" + sec;
    if (sec <= 0) {
        showScore();
    }
};

submitButton.addEventListener('click', setScore);

function setScore() {
    if(scoreInitials.value === '') {
        alert('Please enter initials')
        return false;
    } else {
        let currentUser = scoreInitials.value.trim();
        let currentHighScore = {
            name: currentUser,
            score: score 
        };
        let highScores = JSON.parse(localStorage.getItem('highScores') || '[]');
        highScores.push(currentHighScore);
        localStorage.setItem('highScores', JSON.stringify(highScores));
    }
    window.location.href = 'highscore.html'
}



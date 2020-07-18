const clearButton = document.querySelector('#clearBtn')


highScores = JSON.parse(localStorage.getItem('highScores') || '[]'), 
scoreList = document.querySelector('#scoreList');

for (let s = 0; s < highScores.length; s++) {
    let newLi = document.createElement('div')
    newLi.textContent = highScores[s].name + '-' + highScores[s].score
    scoreList.appendChild(newLi)
}

clearButton.addEventListener('click', function() {
    localStorage.clear();
    history.back();
});
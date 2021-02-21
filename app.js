const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

const playTo = document.querySelector('#playTo');
let maxScore = playTo.value;

p1Button.addEventListener('click', () => {
    if (p1Score.innerText < maxScore && p2Score.innerText < maxScore) {
        p1Score.innerText++
    };

    if (p1Score.innerText == maxScore) {
        p1Score.classList.add('winner');
        p2Score.classList.add('loser');
    }
})

p2Button.addEventListener('click', () => {
    if (p1Score.innerText < maxScore && p2Score.innerText < maxScore) {
        p2Score.innerText++
    };

    if (p2Score.innerText == maxScore) {
        p1Score.classList.add('loser');
        p2Score.classList.add('winner');
    }
})

resetButton.addEventListener('click', () => {
    p1Score.innerText = 0;
    p2Score.innerText = 0;

    p1Score.classList == 'winner' 
        ? p1Score.classList.remove('winner')
        : p1Score.classList.remove('loser');
    p2Score.classList == 'winner' 
        ? p2Score.classList.remove('winner')
        : p2Score.classList.remove('loser');
})

playTo.addEventListener('change', () => {
    maxScore = playTo.value;
})
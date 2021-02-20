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
})

p2Button.addEventListener('click', () => {
    if (p1Score.innerText < maxScore && p2Score.innerText < maxScore) {
        p2Score.innerText++
    };
})

resetButton.addEventListener('click', () => {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
})

playTo.addEventListener('change', () => {
    maxScore = playTo.value;
})
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

const p1Score = document.querySelector('#p1Score');
const p2Score = document.querySelector('#p2Score');

p1Button.addEventListener('click', () => {
    if (p1Score.innerText < 5 && p2Score.innerText < 5) {
        p1Score.innerText++
    };
})

p2Button.addEventListener('click', () => {
    if (p1Score.innerText < 5 && p2Score.innerText < 5) {
        p2Score.innerText++
    };
})

resetButton.addEventListener('click', () => {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
})
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
        p1Score.classList.add('has-text-success');
        p2Score.classList.add('has-text-danger');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})

p2Button.addEventListener('click', () => {
    if (p1Score.innerText < maxScore && p2Score.innerText < maxScore) {
        p2Score.innerText++
    };

    if (p2Score.innerText == maxScore) {
        p1Score.classList.add('has-text-danger');
        p2Score.classList.add('has-text-success');
        p1Button.disabled = true;
        p2Button.disabled = true;
    }
})

resetButton.addEventListener('click', () => {
    p1Score.innerText = 0;
    p2Score.innerText = 0;
    p1Button.disabled = false;
    p2Button.disabled = false;

    p1Score.classList == 'has-text-success' 
        ? p1Score.classList.remove('has-text-success')
        : p1Score.classList.remove('has-text-danger');
    p2Score.classList == 'has-text-success' 
        ? p2Score.classList.remove('has-text-success')
        : p2Score.classList.remove('has-text-danger');
})

playTo.addEventListener('change', () => {
    maxScore = playTo.value;
})
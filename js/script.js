const mound = document.querySelectorAll('.garden__mound');
const gardenContainer = document.querySelector('.garden');
const gardenScore = document.querySelector('.garden__score');
const startupHeading = document.querySelector('.startup');
const startBtn = document.querySelector('.startup__play');

let score = 0;


const randomMole = () => {

    const mole = document.createElement('img');
    mole.src = './assets/mole.svg';
    let randomNum = 0;
    randomNum = Math.floor(Math.random() * mound.length);
    document.getElementById(`${randomNum}`).appendChild(mole).classList.add('garden__mole');
};

const scoreCounter = () => {
    gardenScore.textContent = score += 1;
}


startBtn.addEventListener('click', () => {
    gardenContainer.classList.remove('hide');
    startupHeading.classList.add('hide');
    randomMole();
})


gardenContainer.addEventListener('click', (e) => {
    randomMole();
    if (e.target.classList.contains('garden__mole')) {
        e.target.remove();
        scoreCounter();
    }
})
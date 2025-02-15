let gameSeq = [];
let userSeq = [];

let btns = ['yellow', 'purple', 'red', 'green'];
let started = false;
let level = 0;
let h3 = document.querySelector('h3');

document.addEventListener('keypress', () => {
    if (started == false) {
        console.log('game started');
        started = true;

        levelUp();
    }
})

function gameFlash(btn) {
    btn.classList.add('gameFlash');
    setTimeout(function () {
        btn.classList.remove('gameFlash');
    }, 200);
}

function userFlash(btn) {
    btn.classList.add('userFlash');
    setTimeout(function () {
        btn.classList.remove('userFlash');
    }, 200);
}

function levelUp() {
    userSeq = [];
    level++;
    h3.innerText = `Level ${level}`;
    let randInx = Math.floor(Math.random() * 3);
    let randColor = btns[randInx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(index) {
    // console.log("curr level : ",level);
    if (userSeq[index] === gameSeq[index]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h3.innerHTML = `Game Over! Your score was <b>${level}</b></br> press any key to start.`;
        let body = document.querySelector('body');
        body.style.backgroundColor = '#FF6961';
        setTimeout(() => {
            body.style.backgroundColor = '#fbd9d3';
        }, 200);
        reset();
    }

}

function btnPress() {
    // .console.log("butten is pressed");
    let btn = this;
    userFlash(btn);
    let sequence = btn.getAttribute('id');
    userSeq.push(sequence);
    console.log(userSeq);

    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll('.btn');
for (btn of allBtns) {
    btn.addEventListener('click', btnPress);
}


function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
let userSeq = [];
let gameSeq = [];
let btns = ["yellow", "red", "purple", "green"];

let started = false;
let level = 0;

h2 = document.querySelector("h2");
high = document.querySelector(".highest");

let highest = 0;

document.querySelector("#start-btn").addEventListener("click", function () {
  if (!started) {
    started = true;
    levelUp();
  }
});


function gameFlash(btn) {
  btn.classList.add("flash");

  setTimeout(function () {
    btn.classList.remove("flash");
  }, 150);
}

function userFlash(btn) {
  btn.classList.add("userflash");

  setTimeout(function () {
    btn.classList.remove("userflash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `Level ${level}`;

  let randIdx = Math.floor(Math.random() * 4);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);


  gameSeq.push(randColor);
  console.log(gameSeq);
  gameFlash(randbtn);
}

function checkAns(idx) {


  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    if (level > highest) {
      highest = level;
    }
    h2.innerHTML = `❌ Game Over! Your Score was </b> ${level}</b> <br/>Press Start button again to start.`;
    document.querySelector("body").style.backgroundColor = "red";

    setTimeout(function () {
      document.querySelector("body").style.backgroundColor = "white";
    }, 200);
    high.innerHTML = `🏆 Highest Score :<b>${highest}</b>`;
    reset();
  }
}
document.querySelector("#restart-btn").addEventListener("click", function () {
  h2.innerText = "Press Start button again to start.";
  high.innerHTML = `🏆 Highest Score :<b>${highest}</b>`;
  reset();
});
function btnPress() {
  let btn = this;
  userFlash(btn);

  userColor = btn.getAttribute("id");
  userSeq.push(userColor);
  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
  btn.addEventListener("click", btnPress);
}
function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}

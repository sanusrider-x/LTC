let score = 0;
let time = 10;

const scoreEl = document.getElementById("score");
const timeEl = document.getElementById("time");
const btn = document.getElementById("btn");

btn.onclick = () => {
  if (time > 0) {
    score++;
    scoreEl.innerText = score;
  }
};

let timer = setInterval(() => {
  time--;
  timeEl.innerText = time;

  if (time === 0) {
    clearInterval(timer);
    btn.disabled = true;
    alert("Game Over! Your Score: " + score);
  }
}, 1000);

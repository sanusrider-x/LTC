let score = 0;
const scoreEl = document.getElementById('score');
const messageEl = document.getElementById('message');
const button = document.getElementById('clickBtn');

button.addEventListener('click', () => {
  score++;
  scoreEl.textContent = score;

  if(score % 5 === 0) {
    messageEl.textContent = `🔥 Great! You reached ${score} points!`;
  } else {
    messageEl.textContent = '';
  }
});

const tg = window.Telegram.WebApp;
tg.ready();

const userEl = document.getElementById("user");
const ltcEl = document.getElementById("ltc");
const hashrateEl = document.getElementById("hashrate");


// Telegram user
let userId = "guest";
if (tg.initDataUnsafe && tg.initDataUnsafe.user) {
  userId = tg.initDataUnsafe.user.id;
  userEl.innerText = tg.initDataUnsafe.user.first_name;
} else {
  userEl.innerText = "Guest";
}

// Storage keys
const HR_KEY = "hr_" + userId;
const LTC_KEY = "ltc_" + userId;
const TIME_KEY = "time_" + userId;

// Load data
let hashrate = parseInt(localStorage.getItem(HR_KEY)) || 10;
let ltc = parseFloat(localStorage.getItem(LTC_KEY)) || 0;
let lastTime = parseInt(localStorage.getItem(TIME_KEY)) || Date.now();

// Offline mining
let now = Date.now();
let seconds = Math.floor((now - lastTime) / 1000);
ltc += seconds * hashrate * 0.0000001;

// Update UI
hashrateEl.innerText = hashrate;
ltcEl.innerText = ltc.toFixed(6);

// Mining loop
setInterval(() => {
  ltc += hashrate * 0.0000001;
  ltcEl.innerText = ltc.toFixed(6);

  localStorage.setItem(HR_KEY, hashrate);
  localStorage.setItem(LTC_KEY, ltc);
  localStorage.setItem(TIME_KEY, Date.now());
}, 1000);

// Boost
function boost() {
  hashrate += 5;
  hashrateEl.innerText = hashrate;
  localStorage.setItem(HR_KEY, hashrate);
}


window.addEventListener("DOMContentLoaded", () => {

  if (!window.Telegram || !Telegram.WebApp) {
    console.log("Not opened inside Telegram");
    return;
  }

  const tg = Telegram.WebApp;
  tg.ready();

  const avatar = document.getElementById("userAvatar");
  const user = tg.initDataUnsafe.user;

  if (user && user.first_name) {
    const name = user.first_name;

    avatar.src =
      "https://ui-avatars.com/api/?name=" +
      encodeURIComponent(name) +
      "&background=22c55e&color=ffffff&rounded=true&size=128";

  } else {
    avatar.src = "user.png";
    window.location.href = "https://t.me/LtcUltraMiningBot";

    window.location.replace("https://t.me/LtcUltraMiningBot");
    
    // fallback
  }

});


// Elements
const mineBalEl = document.getElementById("mineBal");
const balEl = document.getElementById("bal");
const collectBtn = document.querySelector(".collect-btn");

// Settings
const HASH_RATE = 0.0000001; // per second

// Load saved data
let mined = parseFloat(localStorage.getItem("mined")) || 0;
let balance = parseFloat(localStorage.getItem("balance")) || 0;
let lastTime = parseInt(localStorage.getItem("lastTime")) || Date.now();

// Calculate offline mining
function calculateOfflineMining() {
  const now = Date.now();
  const diffSeconds = (now - lastTime) / 1000;

  if (diffSeconds > 0) {
    mined += diffSeconds * HASH_RATE;
    lastTime = now;
  }

  saveData();
}

// Save
function saveData() {
  localStorage.setItem("mined", mined);
  localStorage.setItem("balance", balance);
  localStorage.setItem("lastTime", lastTime);
}

// Update UI
function updateUI() {
  mineBalEl.innerText = mined.toFixed(7);
  balEl.innerText = balance.toFixed(7);
}

// Live mining (while app open)
setInterval(() => {
  mined += HASH_RATE;
  lastTime = Date.now();   // 🔑 keep time synced
  updateUI();
  saveData();
}, 1000);

// ✅ FIXED COLLECT BUTTON
collectBtn.addEventListener("click", () => {
  if (mined <= 0) return;

  balance += mined;
  mined = 0;

  lastTime = Date.now();   // 🔥 CRITICAL FIX

  updateUI();
  saveData();
});

// Init
calculateOfflineMining();
updateUI();

// Save time on close
window.addEventListener("beforeunload", () => {
  localStorage.setItem("lastTime", Date.now());
});
  

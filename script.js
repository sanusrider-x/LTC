
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


const mineBalEl = document.getElementById("mineBal");
const hashEl = document.getElementById("hash");

// Settings
const HASH_RATE = 0.0000001; // slow mining per second

// Load saved data
let mined = parseFloat(localStorage.getItem("mined")) || 0;
let lastTime = parseInt(localStorage.getItem("lastTime")) || Date.now();

// Calculate offline mining
function calculateOfflineMining() {
  const now = Date.now();
  const diffSeconds = (now - lastTime) / 1000;

  mined += diffSeconds * HASH_RATE;
  lastTime = now;

  localStorage.setItem("mined", mined);
  localStorage.setItem("lastTime", lastTime);
}

// Update UI
function updateUI() {
  mineBalEl.innerText = mined.toFixed(7);
  hashEl.innerText = Math.round(HASH_RATE * 100000000);
}

// Run once on load
calculateOfflineMining();
updateUI();

// Visual live mining (while app open)
setInterval(() => {
  mined += HASH_RATE;
  updateUI();
  localStorage.setItem("mined", mined);
}, 1000);

// Save time on close
window.addEventListener("beforeunload", () => {
  localStorage.setItem("lastTime", Date.now());
});

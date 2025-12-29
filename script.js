
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


const userId = tg.initDataUnsafe.user.id;

// Bot.Business webhook
const API_URL = "https://bot.business/api/webhook/YOUR_WEBHOOK_ID";

// Elements
const mineBalEl = document.getElementById("mineBal");
const hashEl = document.getElementById("hash");

// Fetch mining data
function loadMining() {
  fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      user_id: userId,
      action: "mine"
    })
  })
  .then(res => res.json())
  .then(data => {
    // Expected response:
    // { mine_balance, hash_rate }

    mineBalEl.innerText = Number(data.mine_balance).toFixed(7);

    // Display hashrate as simple number
    hashEl.innerText = Math.round(data.hash_rate * 10000000);
  });
}

// Initial load
loadMining();

// UI refresh (visual only)
setInterval(loadMining, 6000); // slow refresh
    

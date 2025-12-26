const tg = window.Telegram.WebApp;
tg.ready();

let user = tg.initDataUnsafe.user;
document.getElementById("user").innerText =
  user ? user.first_name + " (ID: " + user.id + ")" : "Guest";

let hashrate = 10;
let trx = 0;

function boost() {
  hashrate += 5;
  document.getElementById("hashrate").innerText = hashrate;
}

// Continuous mining loop
setInterval(() => {
  trx += hashrate / 1000;
  document.getElementById("trx").innerText = trx.toFixed(4);
}, 1000);

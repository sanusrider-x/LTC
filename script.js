const BOT_LINK = "https://t.me/LtcUltraMiningBot";


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
    avatar.src = "user.png"; // fallback
  }

});


if (!window.Telegram || !window.Telegram.WebApp) {
  // Not inside Telegram
  document.body.innerHTML = ""; // remove app UI

  const box = document.getElementById("telegramOnly");
  box.style.display = "block";

  document.getElementById("openBotBtn").href = BOT_LINK;
} else {
  // Inside Telegram
  const tg = Telegram.WebApp;
  tg.ready();
}

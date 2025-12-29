
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

const TELEGRAM_PAGE = "https://t.me/LtcUltraMiningBot";

window.addEventListener("DOMContentLoaded", () => {

  if (!window.Telegram || !Telegram.WebApp) {
    // Browser → redirect to Telegram public page
    window.location.replace(TELEGRAM_PAGE);
    return;
  }

  // Inside Telegram
  const tg = Telegram.WebApp;
  tg.ready();

});

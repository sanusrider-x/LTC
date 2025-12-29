
const tg = window.Telegram.WebApp;
tg.ready();

const user = tg.initDataUnsafe?.user;
const avatar = document.getElementById("userAvatar");

if (user && user.first_name) {
  const name = user.first_name;

  avatar.src =
    "https://ui-avatars.com/api/?" +
    "name=" + encodeURIComponent(name) +
    "&background=22c55e" +
    "&color=ffffff" +
    "&rounded=true" +
    "&size=128";
} else {
  avatar.src = "user.png"; // fallback image
}

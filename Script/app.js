
console.log("JavaScript laddat");

const mobilIkon = document.getElementById("mobilnav-ikon");
const mobilNav = document.getElementById("mobilnav");

mobilIkon.addEventListener("click", () => {
    console.log('Hamburgerikonen klickades!');
    mobilNav.classList.toggle("active");
});


// Hamburgerikon
const mobilIkon = document.getElementById("mobilnav-ikon");
const mobilNav = document.getElementById("mobilnav");

mobilIkon.addEventListener("click", () => {
    mobilNav.classList.toggle("active");
});

// Säkerställer att layout är uppdaterad
window.addEventListener("load", function () {
    window.dispatchEvent(new Event('resize'));
});
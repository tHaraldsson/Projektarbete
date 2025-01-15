
console.log("JavaScript laddat");

const mobilIkon = document.getElementById("mobilnav-ikon");
const mobilNav = document.getElementById("mobilnav");

mobilIkon.addEventListener("click", () => {
    console.log('Hamburgerikonen klickades!');
    mobilNav.classList.toggle("active");
});

emailjs.init("gbZbI9VieA3iRMqna"); // Ersätt med din Public Key

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Förhindra att sidan laddas om

        // Skicka formulärdata via EmailJS
        emailjs.sendForm("service_es269xs", "template_dkjwxx5", form)
            .then(function (response) {
                alert("Ditt meddelande har skickats! Jag återkommer så snart som möjligt.");
                form.reset(); // Rensa formuläret efter skickat meddelande
            }, function (error) {
                alert("Ett fel uppstod: " + error.text);
            });
    });
});
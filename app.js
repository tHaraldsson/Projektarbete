emailjs.init("gbZbI9VieA3iRMqna"); // Ersätt med din Public Key

document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Förhindra att sidan laddas om

        emailjs.sendForm("service_es269xs", "template_dkjwxx5", form)
            .then(function () {
                alert("Ditt meddelande har skickats!");
                form.reset(); // Rensa formuläret
            }, function (error) {
                console.error("Ett fel uppstod:", error);
                alert("Ett fel uppstod: " + error.text);
            });
    });
});

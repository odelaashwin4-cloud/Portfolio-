
let progress = 0;

const progressBar = document.getElementById("progress-bar");
const percentage = document.getElementById("percentage");
const status = document.getElementById("status");

const timer = setInterval(() => {

    progress++;

    progressBar.style.width = progress + "%";
    percentage.textContent = progress + "%";

    if (progress < 35) {
        status.textContent = "Launching creativity...";
    } else if (progress < 70) {
        status.textContent = "Designing possibilities...";
    } else {
        status.textContent = "Entering my world...";
    }

    if (progress >= 100) {

        clearInterval(timer);

        setTimeout(() => {
            window.location.href = "home.html";
        }, 500);

    }

}, 30);


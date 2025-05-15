let secHand = document.getElementById("sec");
let minHand = document.getElementById("min");
let hourHand = document.getElementById("hour");

function updateClock() {
    let now = new Date();
    let seconds = now.getSeconds();
    let minutes = now.getMinutes();
    let hours = now.getHours();

    let secDegree = seconds * 6; // 360 / 60 = 6
    let minDegree = minutes * 6 + seconds * 0.1; // Smooth transition
    let hourDegree = (hours % 12) * 30 + minutes * 0.5; // 360 / 12 = 30

    secHand.style.transform = `rotate(${secDegree}deg)`;
    minHand.style.transform = `rotate(${minDegree}deg)`;
    hourHand.style.transform = `rotate(${hourDegree}deg)`;
}

// Update the clock every second
setInterval(updateClock, 1000);
updateClock(); // Initial call to set the clock immediately

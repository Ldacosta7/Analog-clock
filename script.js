const secondHand = document.getElementById('second-hand');
const minuteHand = document.getElementById('minute-hand');
const hourHand = document.getElementById('hour-hand');

function clockTick() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    const secondDegrees = (seconds / 60) * 360;
    const minuteDegrees = ((minutes + seconds / 60) / 60) * 360;
    const hourDegrees = ((hours + minutes / 60) / 12) * 360;

    secondHand.style.transform = `rotate(${secondDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(clockTick, 1000);
clockTick(); // Appel initial pour éviter le délai d'une seconde avant la première mise à jour

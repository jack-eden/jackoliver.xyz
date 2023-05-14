function setDate() {
    const now = new Date();

    const hours = now.getHours(); // returns an integer, between 0 and 23
    const redHours = (hours + 1) * 10 // change range to 1 - 24, then change to 10 - 240

    const minutes = now.getMinutes(); // returns an integer, between 0 and 59
    const greenMinutes = (minutes + 1) * 4;

    const seconds = now.getSeconds(); // returns an integer, between 0 and 59
    const blueSeconds = (Math.abs(seconds - 30) +1) * 8; // Turns second into an ossilating number between 1 and 31, multiplied by 8

    document.body.style.backgroundColor = "rgb("+redHours+", "+greenMinutes+", "+blueSeconds+")";
}

setInterval(setDate, 1000);

setDate();
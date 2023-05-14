function setDate() {
    const now = new Date();
  
    const seconds = now.getSeconds(); // returns an integer, between 0 and 59
    const blueSeconds = (seconds + 1) * 4; // change range to 1 - 60, then change to 4 - 240

    const mins = now.getMinutes(); // returns an integer, between 0 and 59
    const greenMinutes = (mins + 1) * 4;
  
    const hours = now.getHours(); // returns an integer, between 0 and 23
    const redHours = (hours + 1) * 10 // change range to 1 - 24, then change to 10 - 240

    document.body.style.backgroundColor = "rgb("+redHours+", "+greenMinutes+", "+blueSeconds+")"
}

setInterval(setDate, 1000);

setDate();
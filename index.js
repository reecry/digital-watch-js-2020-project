let digitalClock = () => {


    let date = new Date();


    let hours = date.getHours();
    let amorpm = hours >= 12 ? 'pm' : 'am';

        if (hours > 12) {
            hours -= 12;
        } else if (hours === 0) {
        hours = 12;
        }

    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds + 1;
    document.getElementById("amorpm").innerHTML = amorpm;

    setTimeout(digitalClock, 500);

}

digitalClock();

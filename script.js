const newYear = '1 Jan 2022';
function countdown(){
    const NewYearsDate = new Date(newYear);
    const currentDate = new Date();
    let diff = NewYearsDate - currentDate;
    let time = Math.floor(diff / 1000);
    let days = Math.floor(time/60/60/24)
    let hours = Math.floor((time/60/60) - (days*24))
    let minutes = Math.floor((time/60) - ((days*24*60)+(hours*60)))
    let seconds = Math.floor(time - ((minutes*60)+(hours*60*60)+(days*24*60*60)))   
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;
}

setInterval( countdown, 1000);

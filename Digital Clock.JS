function digitalClock() {
    let today = new Date;
    let day = today.getDay();+ ''
    let hours = today.getHours() + ''
    let minutes = today.getMinutes() + ''
    let seconds = today.getSeconds() + ''

    if (hours < 2) {
        hours = '0' + hours 
    }
    if (minutes < 2) {
       minutes = '0' + minutes
    }
    if (seconds < 2) {
        seconds = '0' + seconds
    }
    console.log(seconds);
    

    let days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat']
    let time = hours + ': ' + minutes + ': ' + seconds;
    let clock = days[day] + ' ' + time
    document.getElementById('clock').innerHTML = clock
}
digitalClock()
setInterval(digitalClock, 1000)




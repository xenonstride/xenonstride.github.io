function getDateObject(zone) {
    let offset = zone.split('gmt')[1]
    let sign, hrs, mins;
    if (offset.length === 2) { sign = offset[0]; hrs = parseInt(offset[1]); mins = 0 }
    else if (offset.length === 4) { sign = offset[0]; hrs = parseInt(offset[1]); mins = parseInt(offset.slice(2)) }
    else if (offset.length === 5) { sign = offset[0]; hrs = parseInt(offset.slice(1, 3)); mins = parseInt(offset.slice(3)) }
    else { console.log("offset error in getDateObject func", zone, offset) }

    const local = new Date()
    const localTime = local.getTime()
    const localOffset = local.getTimezoneOffset() * 60 * 1000
    const utcTime = localTime + localOffset

    const newOffset = (hrs * 60 + mins) * 60 * 1000;

    if (sign === "+") {
        let newTime = new Date(utcTime + newOffset);
        return newTime;
    }
    else if (sign === "-") {
        let newTime = new Date(utcTime - newOffset);
        return newTime;
    }
}

let months = {
    "1": "January",
    "2": "February",
    "3": "March",
    "4": "April",
    "5": "May",
    "6": "June",
    "7": "July",
    "8": "August",
    "9": "September",
    "10": "October",
    "11": "November",
    "12": "December"
}

let sfo = document.querySelector("#gmt-7");
let sfoTime = sfo.children[0].children[0]
let sfoDate = sfo.children[0].children[1]

let boca = document.querySelector("#gmt-5");
let bocaTime = boca.children[0].children[0]
let bocaDate = boca.children[0].children[1]

let cape = document.querySelector("#gmt-4");
let capeTime = cape.children[0].children[0]
let capeDate = cape.children[0].children[1]

let local = document.querySelector("#local");
let localTime = local.children[0].children[0]
let localDate = local.children[0].children[1]


setInterval(() => {
    let now = getDateObject("gmt-7")
    let time;
    let amPm;

    let hours = now.getHours();
    if (hours >= 12) {
        amPm = "PM"
        if (hours !== 12) hours -= 12
    }
    else {
        amPm = "AM"
    }

    if(hours===0) hours+=12
    if (hours.toString().length === 1) time = `0${hours}:`
    else time = `${hours}:`
    if (now.getMinutes().toString().length === 1) time += `0${now.getMinutes()}`
    else time += `${now.getMinutes()}`
    sfoTime.innerText = time + " " + amPm;

    let date = `${now.getDate()} ${months[now.getMonth() + 1]} ${now.getFullYear()}`
    sfoDate.innerText = date;
}, 1000)

setInterval(() => {
    let now = getDateObject("gmt-5")
    let time;
    let amPm;

    let hours = now.getHours();
    if (hours >= 12) {
        amPm = "PM"
        if (hours !== 12) hours -= 12
    }
    else {
        amPm = "AM"
    }

    if(hours===0) hours+=12
    if (hours.toString().length === 1) time = `0${hours}:`
    else time = `${hours}:`
    if (now.getMinutes().toString().length === 1) time += `0${now.getMinutes()}`
    else time += `${now.getMinutes()}`
    bocaTime.innerText = time + " " + amPm;

    let date = `${now.getDate()} ${months[now.getMonth() + 1]} ${now.getFullYear()}`
    bocaDate.innerText = date;
}, 1000)

setInterval(() => {
    let now = getDateObject("gmt-4")
    let time;
    let amPm;

    let hours = now.getHours();
    if (hours >= 12) {
        amPm = "PM"
        if (hours !== 12) hours -= 12
    }
    else {
        amPm = "AM"
    }

    if(hours===0) hours+=12
    if (hours.toString().length === 1) time = `0${hours}:`
    else time = `${hours}:`
    if (now.getMinutes().toString().length === 1) time += `0${now.getMinutes()}`
    else time += `${now.getMinutes()}`
    capeTime.innerText = time + " " + amPm;

    let date = `${now.getDate()} ${months[now.getMonth() + 1]} ${now.getFullYear()}`
    capeDate.innerText = date;
}, 1000)

setInterval(() => {
    let now = new Date()
    let time;
    let amPm;

    let hours = now.getHours();
    if (hours >= 12) {
        amPm = "PM"
        if (hours !== 12) hours -= 12
    }
    else {
        amPm = "AM"
    }

    if(hours===0) hours+=12
    if (hours.toString().length === 1) time = `0${hours}:`
    else time = `${hours}:`
    if (now.getMinutes().toString().length === 1) time += `0${now.getMinutes()}`
    else time += `${now.getMinutes()}`
    localTime.innerText = time + " " + amPm;

    let date = `${now.getDate()} ${months[now.getMonth() + 1]} ${now.getFullYear()}`
    localDate.innerText = date;
}, 1000)

//COUNTDOWN TO NEXT LAUNCH - WIP
// let countdown = new Date(Date.UTC(121, 3, 22, 6, 11, 0))
// //let utc = new Date(countdown.getTime() + countdown.getTimezoneOffset() * 60 * 1000)

// let x = setInterval(function () {

//     // Get today's date and time
//     let now = getDateObject("gmt+0")

//     // console.log(now.getDate())
//     // console.log(now.getMinutes())
//     // console.log(now.getHours())
//     // console.log(now.getSeconds())

//     // Find the distance between now and the count down date
//     let distance = countdown - now;

//     // Time calculations for days, hours, minutes and seconds
//     let days = Math.floor(distance / (1000 * 60 * 60 * 24));
//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//     let seconds = Math.floor((distance % (1000 * 60)) / 1000);

//     // Display the result in the element with id="demo"
//     document.querySelector(".count").innerHTML = days + "d " + hours + "h "
//         + minutes + "m " + seconds + "s ";

//     // If the count down is finished, write some text
//     if (distance < 0) {
//         clearInterval(x);
//         document.getElementById("demo").innerHTML = "EXPIRED";
//     }
// }, 1000);

window.onload = function () {
    let allButtons = document.querySelectorAll('.button-hover')
    for(let button of allButtons){
    button.addEventListener('mouseenter', () => {
        button.classList.add('button-hover-a')
    })

    button.addEventListener('mouseleave', () => {
        button.classList.remove('button-hover-a')
    })}
}
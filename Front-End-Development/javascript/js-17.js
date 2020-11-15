//Selectors
var time = document.getElementById("time");
var greeting = document.getElementById("greeting");
var aname = document.getElementById("name");
var day = document.getElementById("day");

//Event handlers
aname.addEventListener("keypress", setName);
aname.addEventListener("blur", setName);

//Functions
function showTime() {
    let today = new Date();
    let hour = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();
    let date = today.toDateString();

    //am - pm format
    const ampm = hour >= 12 ? 'PM' : 'AM';
    hour = hour % 12 || 12;
    time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`;
    day.innerHTML = `${date}`;
    setTimeout(showTime, 1000);
}

function addZero(h) {
    return ((parseInt(h, 10)) < 10 ? "0" : "") + h;
}

function setGreeting() {
    let today = new Date();
    let hour = today.getHours();

    if (hour < 12) {
        document.body.style.backgroundImage = 'url("../Images/morning.jpg")';
        greeting.innerHTML = "Good Morning";
    } 
    else if (hour < 18) {
        document.body.style.backgroundImage = 'url("../Images/afternoon.jpg")';
        greeting.innerHTML = "Good Afternoon";
    } 
    else{
        document.body.style.backgroundImage = 'url("../Images/evening.jpg")';
        document.body.style.color = 'white';
        greeting.innerHTML = "Good Evening";
    } 
}

function getName() {
    if (localStorage.getItem("Name") === null) {
        aname.innerHTML = "[Enter Name]";
    } 
    else {
        aname.innerHTML = localStorage.getItem("Name");
    }
}

function setName(e) {
    if (e.type === "keypress") {
        if (e.keyCode == 13) {
            localStorage.setItem("Name", e.target.innerHTML);
            aname.blur();
        }
    } 
    else {
        localStorage.setItem("Name", e.target.innerHTML);
    }
}

//Function Calling
showTime();
setGreeting();
getName();

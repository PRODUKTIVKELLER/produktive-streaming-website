let produktiv = window.location.href.indexOf('live') !== -1;

let stayTime = produktiv ? 1000 * 60 : 10000;
let hiddenTime = produktiv ? 1000 * 60 * 7 : 2000;

let heading = document.getElementById('heading');
let notification = document.getElementById('email-notification');
let discord = document.getElementById('discord');
let pinThem = document.getElementById('pin-them');

const soundPath = 'lib/sounds/'

const bubbleSound = new Audio(soundPath + 'bubble.ogg');
const keystrokeSound = new Audio(soundPath + 'keystroke.wav');
const emailSound = new Audio(soundPath + 'woosh.mp3');

window.addEventListener('load', fadeInPinThem);

function fadeInPinThem() {
    const pinThemClone = pinThem.cloneNode(true);
    pinThem.parentNode.replaceChild(pinThemClone, pinThem);
    pinThem = pinThemClone;
    pinThem.classList.add("show");

    bubbleSound.play();

    setTimeout(function () {
        keystrokeSound.play();
    }, 1950);

    setTimeout(fadeOutPinThem, stayTime);
}


function fadeOutPinThem() {
    pinThem.classList.remove("show");

    setTimeout(fadeInHeading, hiddenTime);
}

function fadeInHeading() {

    const headingClone = heading.cloneNode(true);
    heading.parentNode.replaceChild(headingClone, heading);
    heading = headingClone;
    heading.classList.add("show");

    bubbleSound.play();

    setTimeout(function () {
        keystrokeSound.play();
    }, 1950);

    setTimeout(fadeOutHeading, stayTime);
}

function fadeOutHeading() {
    heading.classList.remove("show");

    setTimeout(fadeInEmailNotification, hiddenTime);
}


function fadeInEmailNotification() {
    const notificationClone = notification.cloneNode(true);
    notification.parentNode.replaceChild(notificationClone, notification);
    notification = notificationClone;
    notification.classList.add("show");

    bubbleSound.play();

    setTimeout(function () {
        keystrokeSound.play();
    }, 1950);

    setTimeout(function () {
        emailSound.play();
    }, 5000);

    setTimeout(fadeOutEmailNotification, stayTime);
}

function fadeOutEmailNotification() {
    notification.classList.remove("show");

    setTimeout(fadeInDiscord, hiddenTime);
}


function fadeInDiscord() {
    const discordClone = discord.cloneNode(true);
    discord.parentNode.replaceChild(discordClone, discord);
    discord = discordClone;
    discord.classList.add("show");

    bubbleSound.play();

    setTimeout(function () {
        keystrokeSound.play();
    }, 1950);

    setTimeout(fadeOutDiscord, stayTime);
}

function fadeOutDiscord() {
    discord.classList.remove("show");

    setTimeout(fadeInPinThem, hiddenTime);
}

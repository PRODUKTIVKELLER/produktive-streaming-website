let produktiv = window.location.href.indexOf('live') !== -1;

let stayTime = produktiv? 1000 * 60 : 10000;
let hiddenTime = produktiv? 1000 * 60 * 5 : 2000;

let heading = document.getElementById('heading');
let notification = document.getElementById('email-notification');
let twitter = document.getElementById('twitter');

const soundPath = 'lib/sounds/'

const bubbleSound = new Audio(soundPath +'bubble.ogg');
const keystrokeSound = new Audio(soundPath + 'keystroke.wav');
const emailSound = new Audio(soundPath + 'woosh.mp3');

window.addEventListener('load', fadeInTwitter);

function fadeInHeading() {

    const headingClone = heading.cloneNode(true);
    heading.parentNode.replaceChild(headingClone, heading);
    heading = headingClone;
    heading.classList.add("show");

    bubbleSound.play();

    setTimeout(function() {
        keystrokeSound.play();
    }, 1950);

    setTimeout(fadeOutHeading, stayTime);
}

function fadeOutHeading() {
    heading.classList.remove("show");

    setTimeout(fadeInEmailNotification, hiddenTime);
}


function fadeInEmailNotification()
{
    const notificationClone = notification.cloneNode(true);
    notification.parentNode.replaceChild(notificationClone, notification);
    notification = notificationClone;
    notification.classList.add("show");

    bubbleSound.play();

    setTimeout(function() {
        keystrokeSound.play();
    }, 1950);

    setTimeout(function() {
        emailSound.play();
    }, 5000);

    setTimeout(fadeOutEmailNotification, stayTime);
}

function fadeOutEmailNotification() {
    notification.classList.remove("show");

    setTimeout(fadeInTwitter, hiddenTime);
}


function fadeInTwitter()
{
    const twitterClone = twitter.cloneNode(true);
    twitter.parentNode.replaceChild(twitterClone, twitter);
    twitter = twitterClone;
    twitter.classList.add("show");

    bubbleSound.play();

    setTimeout(function() {
        keystrokeSound.play();
    }, 1950);

    setTimeout(fadeOutTwitter, stayTime);
}

function fadeOutTwitter() {
    twitter.classList.remove("show");

    setTimeout(fadeInHeading, hiddenTime);
}
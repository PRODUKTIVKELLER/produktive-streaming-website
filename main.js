let produktiv = window.location.href.indexOf('live') !== -1;

let stayTime = produktiv? 1000 * 60 : 10000;
let hiddenTime = produktiv? 1000 * 60 * 5 : 2000;

let heading = document.getElementById('heading');
const bubbleSound = new Audio('bubble.ogg');
const keystrokeSound = new Audio('keystroke.wav');

window.addEventListener('load', fadeIn);

function fadeIn() {

    const headingClone = heading.cloneNode(true);
    heading.parentNode.replaceChild(headingClone, heading);

    heading = headingClone;

    heading.classList.add("show");

    bubbleSound.play();

    setTimeout(function() {
        keystrokeSound.play();
    }, 1950);


    setTimeout(fadeOut, stayTime);
}

function fadeOut() {
    heading.classList.remove("show");

    setTimeout(fadeIn, hiddenTime);
}




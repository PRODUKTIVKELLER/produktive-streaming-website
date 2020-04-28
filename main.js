const texts = [
    'Folge "PRODUKTIVKELLER" auf YouTube – Alle 2 Wochen ein neues Video!',
    'Gefällt dir unser Stream? Dann unterstütze "PRODUKTIVKELLER" auf Patreon!'
];

let produktiv = window.location.href.indexOf('live') !== -1;

let stayTime = produktiv? 1000 * 60 : 4000;
let hiddenTime = produktiv? 1000 * 60 * 5 : 2000;

let i = 0;
const heading = document.getElementById('heading');
const bubbleSound = new Audio('bubble.ogg');

window.addEventListener('load', fadeIn);

function fadeIn() {
    heading.innerText = texts[i];
    heading.classList.add("show");

    bubbleSound.play();

    setTimeout(fadeOut, stayTime);
}

function fadeOut() {
    heading.classList.remove("show");

    i++;
    if (i >= texts.length) {
        i = 0;
    }

    setTimeout(fadeIn, hiddenTime);
}




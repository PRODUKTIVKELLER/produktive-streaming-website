const texts = [
    'Folge "PRODUKTIVKELLER" auf YouTube - Alle 2 Wochen ein neues Video',
    'Gefällt dir unser Stream? Dann unterstütze uns über Patreon :) https://www.patreon.com/PRODUKTIVKELLER'
];

let produktiv = false;

let stayTime = produktiv? 1000 * 60 : 2000;
let hiddenTime = produktiv? 1000 * 60 * 10 : 2000;

let i = 0;
const heading = document.getElementById('heading');
console.log(heading);

window.addEventListener('load', fadeIn);

function fadeIn() {
    heading.innerText = texts[i];
    heading.classList.add("show");

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




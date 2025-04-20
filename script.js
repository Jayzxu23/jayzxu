const typedTextSpan = document.getElementById("typed-text");
const typedDescriptionSpan = document.getElementById("typed-description")
const cursorSpan = document.createElement("span");
cursorSpan.className = "cursor";
typedTextSpan.appendChild(cursorSpan);

const yourName = "10tontruck"
const descriptionArray = [
    "Ako na lang sana :(",
    "Akin ka na lang",
    "Actually a Deepseek User"
];
const typingDelay = 120;
const erasingDelay = 80;
const newTextDelay = 2000;
const betweenLinesDelay = 500;

let descArrayIndex = 0;
let charIndex = 0;

typedTextSpan.textContent = yourName;
typedTextSpan.appendChild(cursorSpan);

setTimeout(startDescriptionAnimation, betweenLinesDelay);

function startDescriptionAnimation() {
    charIndex = 0;
    typeDescription();
}

function typeDescription() {
    if (charIndex < descriptionArray[descArrayIndex].length) {
        typedDescriptionSpan.textContent = 
            descriptionArray[descArrayIndex].substring(0, charIndex + 1);
        charIndex++;
        setTimeout(typeDescription, typingDelay);
    } else {
        setTimeout(eraseDescription, newTextDelay);
    }
}

function eraseDescription() {
    if (charIndex > 0) {
        typedDescriptionSpan.textContent = 
            descriptionArray[descArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseDescription, erasingDelay);
    } else {
        descArrayIndex = (descArrayIndex + 1) % descriptionArray.length;
        setTimeout(typeDescription, typingDelay);
    }
}


const muteButton = document.getElementById('mute-toggle');
const video = document.getElementById('video-background');

muteButton.addEventListener('click', function() {
  video.muted = !video.muted;
  muteButton.innerHTML = video.muted ? 
    '<i class="fas fa-volume-mute"></i>' : 
    '<i class="fas fa-volume-up"></i>';
});

document.addEventListener("DOMContentLoaded", function() {
    const video = document.getElementById("video-background");
    video.volume = 0.3;
    
    document.body.addEventListener('click', function() {
        video.play().catch(e => console.log("Autoplay prevented:", e));
    }, { once: true });
});

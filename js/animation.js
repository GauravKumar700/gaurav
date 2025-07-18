// ========== Typing Animation ==========

const roles = ["Full-Stack Developer", "Backend Developer", "Frontend Developer"];
let index = 0;
let charIndex = 0;
let currentRole = roles[index];
const typingSpeed = 100;
const erasingSpeed = 50;
const delayBetweenRoles = 2000;

const textElement = document.getElementById("typewriter-text");

function typeRole() {
    if (!textElement) return;

    if (charIndex < currentRole.length) {
        textElement.textContent += currentRole.charAt(charIndex);
        charIndex++;
        setTimeout(typeRole, typingSpeed);
    } else {
        setTimeout(eraseRole, delayBetweenRoles);
    }
}

function eraseRole() {
    if (!textElement) return;

    if (charIndex > 0) {
        textElement.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        setTimeout(eraseRole, erasingSpeed);
    } else {
        index = (index + 1) % roles.length;
        currentRole = roles[index];
        setTimeout(typeRole, 500);
    }
}

document.addEventListener("DOMContentLoaded", function () {
    setTimeout(typeRole, 1000);
});
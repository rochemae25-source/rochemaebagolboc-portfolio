const roles = [
    "Business Analyst",
    "Data Analyst",
    "Web Developer",
    "UI/UX Designer"
];

let roleIndex = 0;
let charIndex = 0;

function typeEffect() {
    const typingElement = document.getElementById("typing");

    if (charIndex < roles[roleIndex].length) {
        typingElement.textContent += roles[roleIndex].charAt(charIndex);
        charIndex++;

        setTimeout(typeEffect, 100);
    }
    else {
        setTimeout(eraseEffect, 1500);
    }
}

function eraseEffect() {
    const typingElement = document.getElementById("typing");

    if (typingElement.textContent.length > 0) {
        typingElement.textContent =
            typingElement.textContent.slice(0, -1);

        setTimeout(eraseEffect, 50);
    }
    else {
        roleIndex++;

        if (roleIndex >= roles.length) {
            roleIndex = 0;
        }

        charIndex = 0;

        setTimeout(typeEffect, 300);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    typeEffect();
});
// ================= MOBILE NAVBAR =================

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");

    const icon = menuToggle.querySelector("i");

    if (navLinks.classList.contains("active")) {
        icon.classList.replace("fa-bars", "fa-xmark");
    } else {
        icon.classList.replace("fa-xmark", "fa-bars");
    }
});

navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinks.classList.remove("active");

        const icon = menuToggle.querySelector("i");
        icon.classList.replace("fa-xmark", "fa-bars");
    });
});
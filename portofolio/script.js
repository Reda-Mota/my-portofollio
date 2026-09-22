// 1. Typewriter Effect (English)
const texts = [
    "Python Developer",
    "Physics Student",
    "Data Scientist",
    "AI Enthusiast"
];
let count = 0;
let index = 0;
let currentText = "";
let letter = "";
const typingSpeed = 100;
const deletingSpeed = 50;
const delayBetweenTexts = 2000;
let isDeleting = false;

function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    
    if (isDeleting) {
        letter = currentText.slice(0, --index);
    } else {
        letter = currentText.slice(0, ++index);
    }

    document.querySelector('.typewriter-text').textContent = letter;

    let typeSpeed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && letter.length === currentText.length) {
        typeSpeed = delayBetweenTexts;
        isDeleting = true;
    } else if (isDeleting && letter.length === 0) {
        isDeleting = false;
        count++;
        typeSpeed = 500;
    }

    setTimeout(type, typeSpeed);
}
document.addEventListener('DOMContentLoaded', type);

// 2. Scroll Reveal Animation
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 100;
        
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", reveal);
reveal(); // Trigger immediately for elements already in view

// 3. Mouse move effect for Project Cards (Subtle 3D tilt effect)
const cards = document.querySelectorAll('.project-card');

cards.forEach(card => {
    card.addEventListener('mousemove', e => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left; 
        const y = e.clientY - rect.top; 
        
        // Calculate tilt
        const xPct = x / rect.width - 0.5;
        const yPct = y / rect.height - 0.5;
        
        card.style.transform = `perspective(1000px) rotateY(${xPct * 10}deg) rotateX(${yPct * -10}deg) translateY(-10px)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = `perspective(1000px) rotateY(0deg) rotateX(0deg) translateY(0px)`;
    });
});









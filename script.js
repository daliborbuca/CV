// JavaScript for the responsive menu and smooth scrolling

// Toggle mobile menu
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

// Smooth scrolling
const links = document.querySelectorAll('.navbar a, .btn-group a');

for (const link of links) {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        
        const href = link.getAttribute('href');
        document.querySelector(href).scrollIntoView({
            behavior: 'smooth'
        });

        // Close the mobile menu after clicking
        if (navbar.classList.contains('active')) {
            navbar.classList.remove('active');
        }
    });
}

// Text animation for home section
const texts = ["Web Developer", "Graphic Designer", "Freelancer"];
let count = 0;
let index = 0;
let currentText = '';
let letter = '';

(function type() {
    if (count === texts.length) {
        count = 0;
    }
    currentText = texts[count];
    letter = currentText.slice(0, ++index);

    document.querySelector('.text-animation span').textContent = letter;
    if (letter.length === currentText.length) {
        count++;
        index = 0;
    }

    setTimeout(type, 200);
}());

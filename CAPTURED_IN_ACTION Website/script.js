// script.js

//slider functionality 
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Function to move to the next slide
function showNextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlider();
}

// Function to move to the previous slide
function showPrevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlider();
}

// Function to update the slider's position
function updateSlider() {
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Set up automatic slider change every 5 seconds
setInterval(showNextSlide, 5000);

// Attach event listeners to the previous and next buttons
document.querySelector('.prev').addEventListener('click', showPrevSlide);
document.querySelector('.next').addEventListener('click', showNextSlide);

// Initially, show the first slide
updateSlider();


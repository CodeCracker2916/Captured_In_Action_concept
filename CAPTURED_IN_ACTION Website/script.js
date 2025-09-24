// script.js

// ========================
// Slider Functionality
// ========================

// Track the current slide index
let currentSlide = 0;

// Get all slide elements and total number of slides
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

// Get the slider container element
const slider = document.querySelector('.slider');

// Function to update the slider position based on currentSlide index
function updateSlider() {
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Function to move to the next slide (loops back to first after last)
function showNextSlide() {
  currentSlide = (currentSlide + 1) % totalSlides;
  updateSlider();
}

// Function to move to the previous slide (loops to last if on first)
function showPrevSlide() {
  currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
  updateSlider();
}

// Attach event listeners to previous and next buttons
document.querySelector('.prev').addEventListener('click', showPrevSlide);
document.querySelector('.next').addEventListener('click', showNextSlide);

// Automatically change slides every 5 seconds (5000 milliseconds)
const slideInterval = setInterval(showNextSlide, 5000);

// Initialize slider to show the first slide on page load
updateSlider();


// ========================
// Checklist Functionality
// ========================

// Add click event to each checklist item to toggle 'checked' class
document.querySelectorAll('.checklist-item').forEach(item => {
  item.addEventListener('click', () => {
    item.classList.toggle('checked');
  });
});


let slideIndex = 0;
let slideTimeout;

// Function to start the slideshow
function startSlides() {
  showSlides();
}

// Function to display slides
function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  slideTimeout = setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// Function to pause the slideshow
function pauseSlides() {
  clearTimeout(slideTimeout); // Clear the timeout to pause the slideshow
}

// Function to resume the slideshow after a click event
function resumeSlides() {
  slideTimeout = setTimeout(showSlides, 2000); // Resume slideshow after 2 seconds
}

// Attach click event listener to each image to pause the slideshow
let images = document.getElementsByClassName("mySlides");
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("click", function() {
    pauseSlides();
    // Resume slideshow after a delay (adjust the delay time as needed)
    setTimeout(resumeSlides, 5000); // Resume after 5 seconds
  });
}
function currentSlide(n) {
    showSlides(slideIndex = n);
  }
// Start the slideshow when the page loads
window.onload = function() {
  startSlides();
};

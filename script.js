let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let hamsters = document.getElementsByClassName("ascii-hamster");

    // Reset all slides' animations
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
        hamsters[i].classList.remove('spin', 'bounce', 'scale');
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}    

    // Display the current slide
    slides[slideIndex-1].style.display = "block";  

    // Apply the animation based on the slide index
    if (slideIndex === 1) {
        hamsters[slideIndex-1].classList.add('spin');
    } else if (slideIndex === 2) {
        hamsters[slideIndex-1].classList.add('bounce');
    } else if (slideIndex === 3) {
        hamsters[slideIndex-1].classList.add('scale');
    }

    // Change slide every 4 seconds
    setTimeout(showSlides, 4000);
}

showSlides();

// Function to move the button when mouse is over it
function moveButton(event) {
    let button = document.querySelector('.troll-button');

    // Get random position for the button, avoiding the mouse area
    let maxX = window.innerWidth - button.offsetWidth;
    let maxY = window.innerHeight - button.offsetHeight;

    let randomX, randomY;

    // Ensure the button stays away from the mouse cursor
    do {
        randomX = Math.floor(Math.random() * maxX);
        randomY = Math.floor(Math.random() * maxY);
    } while (
        Math.abs(event.clientX - randomX) < 150 && // Ensure the button is 150px away from the mouse
        Math.abs(event.clientY - randomY) < 150
    );

    // Quickly move the button to the new random position
    button.style.transition = 'all 0.1s ease-out';  // Speed up the transition
    button.style.left = randomX + 'px';
    button.style.top = randomY + 'px';
}

// Add event listener for mouseover event
document.querySelector('.troll-button').addEventListener('mouseover', moveButton);


// Function to generate random rabbits
function createRabbit() {
    const rabbit = document.createElement('div');
    rabbit.classList.add('rabbit');
    rabbit.innerHTML = `
      (\(\ 
     ( -.-)
     o_(")(")
    `;

    // Random size
    const randomSize = Math.random() * (70 - 30) + 30; // Random size between 30px and 70px
    rabbit.style.fontSize = `${randomSize}px`;

    // Random position
    const randomX = Math.random() * window.innerWidth;
    const randomY = Math.random() * window.innerHeight;

    rabbit.style.left = `${randomX}px`;
    rabbit.style.top = `${randomY}px`;

    // Random animation (bounce, spin, scale)
    const animations = ['bounce', 'spin', 'scaleInOut'];
    const randomAnimation = animations[Math.floor(Math.random() * animations.length)];

    rabbit.style.animationName = randomAnimation;
    rabbit.style.animationDuration = `${Math.random() * 5 + 3}s`; // Random duration between 3s and 8s
    rabbit.style.animationIterationCount = 'infinite';

    document.querySelector('.slideshow-container').appendChild(rabbit);
}

// Function to continuously create new rabbits
setInterval(createRabbit, 1000);

// Move button away when mouse is over
const trollButton = document.querySelector('.troll-button');
trollButton.addEventListener('mouseover', () => {
    const maxX = window.innerWidth - trollButton.offsetWidth;
    const maxY = window.innerHeight - trollButton.offsetHeight;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    trollButton.style.left = `${randomX}px`;
    trollButton.style.top = `${randomY}px`;
});

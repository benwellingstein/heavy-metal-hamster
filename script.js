document.addEventListener("DOMContentLoaded", () => {
    let index = 0;
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");

    function showSlide(i) {
        slides.forEach(slide => slide.classList.remove("active"));
        slides[i].classList.add("active");
    }

    function nextSlide() {
        index = (index + 1) % slides.length;
        showSlide(index);
    }

    prevBtn.addEventListener("click", () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    });

    nextBtn.addEventListener("click", nextSlide);

    showSlide(index);

    // Auto-rotate every 4 seconds
    setInterval(nextSlide, 4000); // Auto-rotation speed
});

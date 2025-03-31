document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector(".header");
    header.style.opacity = "0";
    header.style.transform = "translateY(-50px)";
    setTimeout(() => {
        header.style.transition = "opacity 1s ease-in-out, transform 1s ease-in-out";
        header.style.opacity = "1";
        header.style.transform = "translateY(0)";
    }, 500);

    const links = document.querySelectorAll(".nav a");
    links.forEach(link => {
        link.addEventListener("mouseover", function() {
            link.style.textShadow = "0 0 10px #d4af37";
        });
        link.addEventListener("mouseout", function() {
            link.style.textShadow = "none";
        });
    });
});

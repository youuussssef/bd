// Animate gallery images with fade-in and bounce effect
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll(".gallery img");
    images.forEach((img, index) => {
        img.style.opacity = 0;
        img.style.transform = "translateY(20px)";
        setTimeout(() => {
            img.style.transition = "opacity 0.5s ease, transform 0.5s ease";
            img.style.opacity = 1;
            img.style.transform = "translateY(0)";
        }, index * 200);
    });
});
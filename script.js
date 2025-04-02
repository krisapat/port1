//nav
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});
//nav
//fades
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fades");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // คำนวณระดับการมองเห็น (0.0 - 1.0)
            let visibility = entry.intersectionRatio;
            entry.target.style.opacity = visibility; 
        });
    }, { threshold: [...Array(11).keys()].map(i => i * 0.1) }); 
    // threshold: [0, 0.1, 0.2, ..., 1.0] เพื่อให้เอฟเฟกต์ไหลลื่น

    fadeElements.forEach(el => observer.observe(el));
});
//fades
const hamburgerIcon = document.getElementById("hamburger-icon");
const mobileMenu = document.getElementById("mobile-menu");

hamburgerIcon.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
});

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

function changeContent(name, description, imageSrc) {
    let textContent = document.getElementById('content-text');
    let imageContent = document.getElementById('content-image');
    let image = document.getElementById('char-image');

    textContent.classList.remove('no-into');
    textContent.classList.remove('show');
    imageContent.classList.remove('show');
    
    setTimeout(() => {
        document.getElementById('char-name').innerText = name;
        document.getElementById('char-description').innerText = description;
        image.src = imageSrc;
        image.classList.remove('hidden');
        textContent.classList.add('show');
        imageContent.classList.add('show');
    }, 100);
}

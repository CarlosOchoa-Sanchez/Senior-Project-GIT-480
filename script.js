const slides = document.querySelector(".slides");
const slideItems = document.querySelectorAll(".slide");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

let currentIndex = 0;

function moveSlider() {
    const slideWidth = slideItems[0].offsetWidth + 30; 
    slides.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

nextBtn.addEventListener("click", () => {
    if (currentIndex < slideItems.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    moveSlider();
});

prevBtn.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slideItems.length - 1;
    }
    moveSlider();
});

window.addEventListener("resize", moveSlider);

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    const isExpanded = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isExpanded));
  });
}
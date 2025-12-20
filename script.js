const slider = document.getElementById("slider");
const sliders = slider.children.length;
let index = 0;

function showSlide() {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    index = (index + 1) % sliders;
    showSlide();
}

function prevSlide() {
    index = (index - 1 + sliders) % sliders;
    showSlide();
}

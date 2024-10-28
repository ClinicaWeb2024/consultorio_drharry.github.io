let index = 0;

function showSlide(i) {
    const slides = document.querySelectorAll('.carousel-item');
    const totalSlides = slides.length;
    
    if (i >= totalSlides) {
        index = 0;
    } else if (i < 0) {
        index = totalSlides - 1;
    } else {
        index = i;
    }
    
    const offset = -index * 100;
    document.querySelector('.carousel-inner').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
    showSlide(index + 1);
}

function prevSlide() {
    showSlide(index - 1);
}

// Auto-slide every 3 seconds
setInterval(nextSlide, 3000);

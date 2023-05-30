window.onload = init;

function init() {
    initCarousel();
};

function initCarousel() {
    let carousel = document.querySelector('.carousel'),
        arrowLeft = carousel.querySelector('.carousel__arrow_left'),
        arrowRight = carousel.querySelector('.carousel__arrow_right'),
        inner = carousel.querySelector('.carousel__inner'),
        slides = carousel.querySelectorAll('.carousel__slide'),
        widthSlide = slides[0].offsetWidth,
        counter = 1,
        position = 0;

        arrowLeft.style.display = 'none';

        carousel.addEventListener('click', (event) => {
            if(event.target == arrowRight || event.target == arrowRight.querySelector('img')) {
            position -= widthSlide;
            inner.style.transform = `translateX(${position}px)`;
            ++counter;
            if (counter == 2) {
            arrowLeft.style.display = '';
            } else if (counter == slides.length) {
            arrowRight.style.display = 'none';
             } 
            }
            if(event.target == arrowLeft || event.target == arrowLeft.querySelector('img')) {
            position += widthSlide;
            inner.style.transform = `translateX(${position}px)`;
            --counter;
            if (counter == 1) {
             arrowLeft.style.display = 'none';
            } else if (counter == slides.length - 1) {
             arrowRight.style.display = '';
             } 
            }
        });
    
}

class Carousel {
    constructor(element) {
        this.carousel = element;
        this.container = this.carousel.querySelector('.carousel-container');
        this.prevButton = this.carousel.querySelector('.prev');
        this.nextButton = this.carousel.querySelector('.next');
        this.images = this.carousel.querySelectorAll('.carousel-image');
        this.currentIndex = 0;
        this.imageWidth = this.images[0].clientWidth;

        this.prevButton.addEventListener('click', () => this.move('prev'));
        this.nextButton.addEventListener('click', () => this.move('next'));

        window.addEventListener('resize', () => {
            this.imageWidth = this.images[0].clientWidth;
            this.updatePosition();
        });
    }

    move(direction) {
        if (direction === 'next') {
            this.currentIndex = (this.currentIndex + 1) % this.images.length;
        } else {
            this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        }
        this.updatePosition();
    }

    updatePosition() {
        this.container.style.transform = `translateX(-${this.currentIndex * this.imageWidth}px)`;
    }
}

// Inicialización del carrusel
document.addEventListener('DOMContentLoaded', () => {
    const carouselElement = document.getElementById('imageCarousel');
    if (carouselElement) {
        new Carousel(carouselElement);
    }
});
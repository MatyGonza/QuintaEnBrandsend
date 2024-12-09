document.addEventListener('DOMContentLoaded', () => {
    // Inicializar el carrusel
    const carouselElement = document.getElementById('imageCarousel');
    if (carouselElement) {
        new Carousel(carouselElement);
    }

    // Inicializar el calendario
    if (typeof generateCalendar === 'function') {
        generateCalendar();
    }

    // Configurar el botón de reserva
    const bookButton = document.getElementById('bookButton');
    if (bookButton) {
        bookButton.addEventListener('click', () => {
            alert('¡Reserva realizada con éxito!');
        });
    }
});
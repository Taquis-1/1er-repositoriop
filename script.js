document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.downloads a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            alert(`Pronto te redirigiremos a ${link.id.toUpperCase()}.`);
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');

    carousels.forEach(carousel => {
        const imagesContainer = carousel.querySelector('.carousel-images');
        const images = imagesContainer.querySelectorAll('img');
        const prevButton = carousel.querySelector('.prev');
        const nextButton = carousel.querySelector('.next');

        let currentIndex = 0;

        const updateCarousel = () => {
            const offset = -currentIndex * images[0].clientWidth;
            imagesContainer.style.transform = `translateX(${offset}px)`;
        };

        prevButton.addEventListener('click', () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateCarousel();
        });

        nextButton.addEventListener('click', () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateCarousel();
        });

        // Ajustar el carrusel al redimensionar la ventana
        window.addEventListener('resize', updateCarousel);
    });
});

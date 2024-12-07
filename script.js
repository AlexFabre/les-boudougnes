const images = [
    'url("img/image-01.jpg")',
    'url("img/image-02.jpg")',
    'url("img/image-03.jpg")',
    'url("img/image-04.jpg")',
    'url("img/image-05.jpg")',
    'url("img/image-06.jpg")'
];

let currentIndex = 0;

function changeBackground() {
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
}

setInterval(changeBackground, 5000); // Change image every 5 seconds

// Initialize the first image
changeBackground();

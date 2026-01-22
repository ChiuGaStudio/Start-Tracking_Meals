document.addEventListener('DOMContentLoaded', () => {
    const images = [
        'assets/1.png',
        'assets/2.png',
        'assets/3.png',
        'assets/4.png',
        'assets/5.png'
    ];
    let currentIndex = 0;
    const imgElement = document.getElementById('carousel-image');

    if (imgElement) {
        setInterval(() => {
            // Fade out
            imgElement.classList.remove('opacity-100');
            imgElement.classList.add('opacity-0');

            setTimeout(() => {
                // Change image
                currentIndex = (currentIndex + 1) % images.length;
                imgElement.src = images[currentIndex];

                // Fade in
                imgElement.classList.remove('opacity-0');
                imgElement.classList.add('opacity-100');
            }, 1000); // Wait for fade out transition (1000ms matches duration-1000)
        }, 4000); // Change every 4 seconds (3s view + 1s transition)
    }
});

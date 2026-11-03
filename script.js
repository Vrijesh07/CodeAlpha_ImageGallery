
const images = document.querySelectorAll(".gallery img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let currentIndex = 0;

// Open a photo
images.forEach(function(image, index) {
    image.addEventListener("click", function() {
        currentIndex = index;
        showImage();
        lightbox.style.display = "flex";
    });
});

// Display the selected photo
function showImage() {
    lightboxImg.src = images[currentIndex].src;
    lightboxImg.alt = images[currentIndex].alt;
}

// Close the photo viewer
closeBtn.addEventListener("click", function() {
    lightbox.style.display = "none";
});

// Show the previous photo
prevBtn.addEventListener("click", function() {
    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = images.length - 1;
    }

    showImage();
});

// Show the next photo
nextBtn.addEventListener("click", function() {
    currentIndex++;

    if (currentIndex >= images.length) {
        currentIndex = 0;
    }

    showImage();
});

// Close when clicking the dark background
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        lightbox.style.display = "none";
    }
});

// Close using the Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        lightbox.style.display = "none";
    }
});

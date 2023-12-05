const cloud = document.querySelector('.cloud');
const sky = document.querySelector('.sky');
const sunContainer = document.querySelector('.sun-container');
const cloudContainer = document.querySelector('.cloud-container');
const cloudImages = document.querySelectorAll('.cloud-image');

sky.addEventListener('mousemove', (event) => {
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  cloud.style.left = mouseX - cloud.offsetWidth / 2 + 'px';
  cloud.style.top = mouseY - cloud.offsetHeight / 2 + 'px';

  const sun = document.querySelector('.sun');
  const sunRect = sun.getBoundingClientRect();
  const cloudRect = cloud.getBoundingClientRect();

  if (
    cloudRect.left < sunRect.right &&
    cloudRect.right > sunRect.left &&
    cloudRect.top < sunRect.bottom &&
    cloudRect.bottom > sunRect.top
  ) {
    sky.style.backgroundColor = 'darkblue'; // Set the background to dark blue when the cloud covers the sun
    showCloudImages(); // Call the function to show cloud images
  } else {
    sky.style.backgroundColor = '#87CEEB'; // Reset to the initial sky color
    showSunImages(); // Call the function to show sun images
  }
});

// Function to show cloud images and hide sun images
function showCloudImages() {
  sunContainer.style.opacity = '0'; // Hide the sun container
  cloudContainer.style.opacity = '1'; // Show the cloud container
  cloudImages.forEach((image) => {
    image.style.opacity = '1'; // Show the cloud images
  });
}

// Function to show sun images and hide cloud images
function showSunImages() {
  sunContainer.style.opacity = '1'; // Show the sun container
  cloudContainer.style.opacity = '0'; // Hide the cloud container
  cloudImages.forEach((image) => {
    image.style.opacity = '0'; // Hide the cloud images
  });
}

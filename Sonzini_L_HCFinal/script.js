// Get a reference to the arrow element
const colorChangingArrow = document.getElementById("colorChangingArrow");

// Define an array of colors you want to cycle through
const colors = ["red", "yellow", "green", "blue"]; // Add more colors if needed

let currentColorIndex = 0;

// Function to change the arrow's color
function changeArrowColor() {
  colorChangingArrow.style.color = colors[currentColorIndex];
  currentColorIndex = (currentColorIndex + 1) % colors.length;
}

// Set an interval to change the color every 2 seconds (adjust the interval as needed)
setInterval(changeArrowColor, 2000);

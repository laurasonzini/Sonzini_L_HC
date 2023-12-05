const cursor = document.getElementById("cursor");
const background = document.querySelector(".background-image");

document.addEventListener("mousemove", (event) => {
    const x = event.clientX;
    const y = event.clientY;

    cursor.style.left = x + "px";
    cursor.style.top = y + "px";

    // Adjust the position of the background image based on cursor's position
    background.style.backgroundPosition = `${x}px ${y}px`;
});

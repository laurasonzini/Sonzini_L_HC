document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('video');

    videos.forEach(video => {
        video.addEventListener('ended', () => {
            video.currentTime = 0; // Rewind to the beginning
            video.play(); // Start playing again
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    let isDragging = false;
    let initialX;
    let initialY;
    let offsetX = 0;
    let offsetY = 0;
    let activeElement = null;

    const dragStart = (e) => {
        isDragging = true;
        activeElement = e.target;
        const rect = activeElement.getBoundingClientRect();
        initialX = e.clientX - rect.left;
        initialY = e.clientY - rect.top;
        offsetX = e.clientX - rect.left - window.scrollX;
        offsetY = e.clientY - rect.top - window.scrollY;
    };

    const dragEnd = () => {
        isDragging = false;
        activeElement = null;
    };

    const drag = (e) => {
        if (isDragging && activeElement !== null) {
            e.preventDefault();
            const x = e.clientX - offsetX;
            const y = e.clientY - offsetY;
            activeElement.style.left = `${x}px`;
            activeElement.style.top = `${y}px`;

            if (e.clientY > window.innerHeight - 50 && window.scrollY < document.body.scrollHeight - window.innerHeight) {
                window.scrollBy(0, 5);
            } else if (e.clientY < 50 && window.scrollY > 0) {
                window.scrollBy(0, -5);
            }
        }
    };

    document.addEventListener('mousedown', (e) => {
        if (e.target.classList.contains('draggable')) {
            dragStart(e);
        }
    });

    document.addEventListener('mouseup', dragEnd);
    document.addEventListener('mousemove', drag);
});

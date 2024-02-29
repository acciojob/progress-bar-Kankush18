//your JS code here. If required.
const circles = document.querySelectorAll('.circle');
const bars = document.querySelectorAll('.bar');
const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');

let currentCircleIndex = 0;

// Function to update circle and bar classes based on current index
function updateProgress() {
    circles.forEach((circle, index) => {
        if (index === currentCircleIndex) {
            circle.classList.add('active');
        } else {
            circle.classList.remove('active');
        }
    });

    bars.forEach((bar, index) => {
        if (index < currentCircleIndex) {
            bar.classList.add('active');
        } else {
            bar.classList.remove('active');
        }
    });

    // Enable/disable buttons based on current index
    if (currentCircleIndex === 0) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (currentCircleIndex === circles.length - 1) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Event listener for next button
nextButton.addEventListener('click', () => {
    if (currentCircleIndex < circles.length - 1) {
        currentCircleIndex++;
        updateProgress();
    }
});

// Event listener for previous button
prevButton.addEventListener('click', () => {
    if (currentCircleIndex > 0) {
        currentCircleIndex--;
        updateProgress();
    }
});

// Initialize progress
updateProgress();
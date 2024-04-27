// Declare a global variable to store the readings
let readings = []; // This will hold our readings data
let isDataLoaded = false; // Flag to check if data is loaded

// Function to fetch and store the readings from the JSON file
function loadReadings() {
    fetch('readings.json') // Make sure the path is correct
        .then(response => response.json()) // Parse JSON from the response
        .then(data => {
            readings = data; // Store the data in the readings variable
            isDataLoaded = true; // Set the flag to true after the data is loaded
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
}

// Function to fetch a random reading object from the loaded readings array
function getRandomReading() {
    const index = Math.floor(Math.random() * readings.length);
    return readings[index];
}

// Update the reading with the text from the random reading
function updateReading(reading) {
    const readingTitle = document.getElementById('readingTitle');
    const readingSubtitle = document.getElementById('readingSubtitle');
    const readingDescription = document.getElementById('readingDescription');
    const readingText = document.getElementById('readingText');

    // Update text content
    readingTitle.textContent = reading.name;
    readingSubtitle.textContent = reading.attributes;
    readingDescription.textContent = reading.description;
    readingText.textContent = reading.text;

     // Set colors dynamically from the JSON data
     readingTitle.style.color = reading.color; // Ensures the title uses the color specified in the data

    // Initially set opacity to 0
    readingTitle.style.opacity = 0;
    readingSubtitle.style.opacity = 0;
    readingDescription.style.opacity = 0;
    readingText.style.opacity = 0;

    // Fade in the texts with some delay
    setTimeout(() => {
        readingTitle.style.opacity = 1;
    }, 1000); // Delays can be adjusted or staggered for each element

    setTimeout(() => {
        readingSubtitle.style.opacity = 1;
    }, 1100); // Stagger start times for visual effect

    setTimeout(() => {
        readingDescription.style.opacity = 1;
    }, 1200);

    setTimeout(() => {
        readingText.style.opacity = 1;
    }, 1300);
}

function updateImage(imagePath) {
    const image = document.getElementById('mainImage');
    image.style.opacity = 0; // Start by making the image transparent

    // Once the image is fully transparent, change the source and fade it back in
    setTimeout(() => {
        image.src = imagePath;
        image.onload = () => {
            image.style.opacity = 1;
        };
    }, 1000); // This timeout duration should match the CSS opacity transition
}

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const button = document.getElementById('updateButton');
    const placeholderImage = document.getElementById('placeholderImage');
    const soundEffect = new Audio('snds/cnfrmtn.mp3');

    // Load the readings data from the JSON file
    loadReadings();

    button.addEventListener('click', function() {
        if (!isDataLoaded) {
            console.log('Readings data is not yet loaded.');
            return; // Exit the function if data isn't loaded
        }
    
        // Get a random reading
        const randomReading = getRandomReading();
    
        // Play the sound effect
        soundEffect.play();
    
        // Update the reading display
        updateReading(randomReading);
    
        // Transition to a new image
        // This part should call updateImage function instead
        updateImage('imgs/' + randomReading.image);

    });
});

// Make sure you've added the 'visible' class in your CSS:
// .visible { display: block; }
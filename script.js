const randomImageButton = document.getElementById('randomImageButton');
const imageContainer = document.getElementById('imageContainer');

// Your image URLs (replace with your actual image URLs)
const imageUrls = [
    '/images/001-Birth.png',
    '/images/002-Transition.png',
    '/images/003-Persistence.png',
    '/images/004-Reason.png',
    '/images/005-Legacy.png',
    '/images/006-Wisdom.png',
    '/images/007-Growth.png',
    '/images/008-Wane.png',
    '/images/009-Education.png',
    '/images/010-Enigma.png',
    '/images/011-Fascination.png',
    '/images/012-Stagnation.png',
    '/images/013-Eruption.png',
    '/images/014-Chaos.png',
    '/images/015-Distraction.png',
    '/images/016-Anxiety.png',
    '/images/017-Haste.png',
    '/images/018-Risk.png',
    '/images/019-Explosion.png',
    '/images/020-Collapse.png',
    '/images/021-Shock.png',
    '/images/022-Confusion.png',
    '/images/023-Obsession.png',
    '/images/024-Disgust.png',
    '/images/025-Innovation.png',
    '/images/026-Fantasy.png',
    '/images/027-Inspiration.png',
    '/images/028-Gratitude.png',
    '/images/029-Bloom.png',
    '/images/030-Return.png',
    '/images/031-Discovery.png',
    '/images/032-Intuition.png',
    '/images/033-Charisma.png',
    '/images/034-Dispersion.png',
    '/images/035-Erosion.png',
    '/images/036-Repression.png',
    '/images/037-Wrath.png',
    '/images/038-Apathy.png',
    '/images/039-Conflict.png',
    '/images/040-Retreat.png',
    '/images/041-Warning.png',
    '/images/042-Deceit.png',
    '/images/043-Intoxication.png',
    '/images/044-Waste.png',
    '/images/045-Generosity.png',
    '/images/046-Blessing.png',
    '/images/047-Urgency.png',
    '/images/048-Reprieve.png',
    '/images/049-Sincerity.png',
    '/images/050-Guile.png',
    '/images/051-Allure.png',
    '/images/052-Defiance.png',
    '/images/053-Sedation.png',
    '/images/054-Forgiveness.png',
    '/images/055-Relief.png',
    '/images/056-Tension.png',
    '/images/057-Reflection.png',
    '/images/058-Dream.png',
    '/images/059-Reverie.png',
    '/images/060-Tedium.png',
    '/images/061-Advocacy.png',
    '/images/062-Avarice.png',
    '/images/063-Guidance.png',
    '/images/064-Imagination.png',
    '/images/065-Adornment.png',
    '/images/066-Curse.png',
    '/images/067-Nourishment.png',
    '/images/068-Resignation.png',
    '/images/069-Enchantment.png',
    '/images/070-Adaptability.png',
    '/images/071-Praise.png',
    '/images/072-Tolerance.png',
    '/images/073-Clarity.png',
    '/images/074-Obscurity.png',
    '/images/075-Fondness.png',
    '/images/076-Aversion.png',
    '/images/077-Secret.png',
    '/images/078-Arrogance.png',
    '/images/079-Antipathy.png',
    '/images/080-Ache.png',
    '/images/081-Desire.png',
    '/images/082-Awe.png',
    '/images/083-Charm.png',
    '/images/084-Eeriness.png'
];


randomImageButton.addEventListener('click', () => {
    // Check if there is an existing image
    const existingImage = imageContainer.querySelector('img');

    // If there is an existing image, remove it
    if (existingImage) {
        existingImage.remove();
    }

    // Get a new random image
    const randomIndex = Math.floor(Math.random() * imageUrls.length);
    const randomImageUrl = imageUrls[randomIndex];

    // Create a new image element
    const imageElement = document.createElement('img');
    imageElement.src = randomImageUrl;
    imageElement.alt = 'Random Image';

    // Set the width directly on the image element
    imageElement.style.width = '400px'; // Adjust the size as needed

    // Append the new image to the container
    imageContainer.appendChild(imageElement);
});

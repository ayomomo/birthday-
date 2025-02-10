function selectOption(option) {
    if (option === 'yes') {
        confetti();
        document.getElementById('question').innerText = 'YAYYY!!! HAPPY BIRTHDAY POOKIEEE';

        // Hide options immediately
        document.getElementById('options').style.display = 'none';

        playSound('party-horn.mp3');

        setTimeout(function () {
            playSound('happy-birthday.mp3', true);
            flashRainbowColors();
        }, 1000); 

        // Change the GIF immediately
        displayCatSilly();
    } else if (option === 'no') {
        var noButton = document.getElementById('no-button');
        noButton.innerText = 'Really?';

        var yesButton = document.getElementById('yes-button');
        var currentFontSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
        yesButton.style.fontSize = (currentFontSize * 2) + 'px';
    } else {
        alert('Invalid!!');
    }
}

function flashRainbowColors() {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;

    setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds, runs forever
}

function displayCat() {
    var imageContainer = document.getElementById('image-container');
    if (!imageContainer.querySelector('img')) { // Prevents duplicate images
        var catImage = new Image();
        catImage.src = 'cat.gif';
        catImage.alt = 'Cat';
        catImage.onload = function () {
            imageContainer.appendChild(catImage);
        };
    }
}

function displayCatSilly() {
    var imageContainer = document.getElementById('image-container');
    imageContainer.innerHTML = ''; // Clear existing images

    var catSillyImg = new Image();
    catSillyImg.src = 'cat-silly.gif';
    catSillyImg.alt = 'Silly Cat';
    catSillyImg.onload = function () {
        imageContainer.appendChild(catSillyImg);
    };
}

function playSound(src, loop = false) {
    var audio = new Audio(src);
    audio.loop = loop; // Loop if needed (for Happy Birthday)
    audio.play().catch(error => console.error("Audio playback failed:", error));
}

document.addEventListener('DOMContentLoaded', displayCat); // Ensures the function runs after the DOM loads

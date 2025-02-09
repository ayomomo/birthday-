function selectOption(option) {
    if (option === 'yes') {
        document.getElementById('question').innerText = 'YAYYY!!!';
        flashRainbowColors(displayCatSilly); // Flash colors first, then show the silly cat
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

function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); // Change color every 200 milliseconds

    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; // Reset background color
        if (callback) {
            callback(); // Call the next function after the effect
        }
    }, 2000); // Flash colors for 2 seconds
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
        document.getElementById('options').style.display = 'none';
    };
}

document.addEventListener('DOMContentLoaded', displayCat); // Ensures the function runs after the DOM loads

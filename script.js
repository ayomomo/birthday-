function selectOption(option) {
    if (option === 'yes') {
        flashRainbowColors(function() {
            document.getElementById('question').style.display = 'none';
            displayCatSilly(); 
        });
    } else if (option === 'no') {
        document.getElementById('no-button').innerText = 'You sure???'; 
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2;
        yesButton.style.fontSize = newSize + 'px';
    } else {
        alert('Invalid option!');
    }
}

// Function to flash rainbow colors and then execute a callback function
function flashRainbowColors(callback) {
    var colors = ['#ff0000', '#ff7f00', '#ffff00', '#00ff00', '#0000ff', '#4b0082', '#9400d3'];
    var i = 0;
    var interval = setInterval(function() {
        document.body.style.backgroundColor = colors[i];
        i = (i + 1) % colors.length;
    }, 200); 
    setTimeout(function() {
        clearInterval(interval);
        document.body.style.backgroundColor = ''; 
        if (callback) {
            callback();
        }
    }, 2000); 
}


function displayCat() {
    var imageContainer = document.getElementById('image-container');
    var catImage = new Image();
    catImage.src = 'cat.gif'; 
    catImage.alt = 'Cat';
    catImage.onload = function() {
        imageContainer.appendChild(catImage);
    };
}


function displayCatSilly() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var catSillyImage = new Image();
    catSillyImage.src = 'cat-silly.gif'; 
    catSillyImage.alt = 'Cat Silly';
    catSillyImage.onload = function() {
        imageContainer.appendChild(catSillyImage);
        document.getElementById('options').style.display = 'none';
    };
}

displayCat();
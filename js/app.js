'use strict';

let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let imagesDiv = document.getElementById('images')
Image.allImages = [];
let image1Index;
let image2Index;
let image3Index;
let noShow = []

let maxAttempts = 25;
let userAttemptsCounter = 0;
// let timesShown = 0;
// let clicked = 0;
// Constructor Function
function Image(name, source) {
    this.name = name;
    this.source = source;
    this.timesShown = 0;
    this.clicked = 0;

    Image.allImages.push(this);
}

// Instances
new Image('bag', '../img/bag.jpg');
new Image('banana', '../img/banana.jpg');
new Image('bathroom', '../img/bathroom.jpg');
new Image('boots', '../img/boots.jpg');
new Image('breakfast', '../img/breakfast.jpg');
new Image('bubblegum', '../img/bubblegum.jpg');
new Image('chair', '../img/chair.jpg');
new Image('cthulhu', '../img/cthulhu.jpg');
new Image('dog-duck', '../img/dog-duck.jpg');
new Image('dragon', '../img/dragon.jpg');
new Image('pen', '../img/pen.jpg');
new Image('pet-sweep', '../img/pet-sweep.jpg');
new Image('scissors', '../img/scissors.jpg');
new Image('shark', '../img/shark.jpg');
new Image('sweep', '../img/sweep.png');
new Image('tauntaun', '../img/tauntaun.jpg');
new Image('unicorn', '../img/unicorn.jpg');
new Image('usb', '../img/usb.gif');
new Image('water-can', '../img/water-can.jpg');
new Image('wine-glass', '../img/wine-glass.jpg');


function generateRandomIndex() {
    return Math.floor(Math.random() * Image.allImages.length);
}



function render3Images() {
    image1Index = generateRandomIndex();
    image1.src = Image.allImages[image1Index].source;

    image2Index = generateRandomIndex();
    image2.src = Image.allImages[image2Index].source;

    image3Index = generateRandomIndex();
    image3.src = Image.allImages[image3Index].source;

    while (image1Index === image2Index || image1Index === image3Index || image2Index === image3Index) {
        image1Index = generateRandomIndex();
        image2Index = generateRandomIndex();
        image3Index = generateRandomIndex();


    };
    noShow.push(image1Index);
    noShow.push(image2Index);
    noShow.push(image3Index);
    console.log(noShow)


    image1.src = Image.allImages[image1Index].source;
    Image.allImages[image1Index].timesShown++;

    image2.src = Image.allImages[image2Index].source;
    Image.allImages[image2Index].timesShown++;

    image3.src = Image.allImages[image3Index].source;
    Image.allImages[image3Index].timesShown++;

    // console.log(Image.allImages[image1Index].name,Image.allImages[image1Index].timesShown)


};

// console.log('console', allImages)
render3Images();

imagesDiv.addEventListener('click', handleUserClick);

function handleUserClick(event) {
    // console.log(event.target.id)
    userAttemptsCounter++;
    render3Images();

    if (userAttemptsCounter <= maxAttempts) {
        if (event.target.id === 'image1') {
            Image.allImages[image1Index].clicked++;
        } else if (event.target.id === 'image2') {
            Image.allImages[image2Index].clicked++;
        } else if (event.target.id === 'image3') {
            Image.allImages[image3Index].clicked++;
        }

    } else if (userAttemptsCounter > maxAttempts) {
        let list = document.getElementById('results-list');


        let imageResult;
        let button = document.createElement('button');
        list.appendChild(button);
        button.textContent = 'Show Results';
        button.addEventListener('click', showResults);
        // showResults();
        

        function showResults(){

            for (let i = 0; i < Image.allImages.length; i++) {
                imageResult = document.createElement('li');
                list.appendChild(imageResult);
    
                imageResult.textContent = `${Image.allImages[i].name} has ${Image.allImages[i].clicked} clicks and was seen ${Image.allImages[i].timesShown} times`
    
            }
            button.removeEventListener('click', showResults);
            
            // console.log(imageResult)
        }
        
        imagesDiv.removeEventListener('click', handleUserClick);
        // button.removeEventListener('click', showResults);
    }
    // button.removeEventListener('click', showResults);
}



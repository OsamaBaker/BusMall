'use strict';

let image1 = document.getElementById('image1');
let image2 = document.getElementById('image2');
let image3 = document.getElementById('image3');
let imagesDiv = document.getElementById('images')
Image.allImages = [];
let image1Index;
let image2Index;
let image3Index;
let noDuplicate = [];
let namesArr = [];
let votesArr = [];
let shownArr = [];

let maxAttempts = 5;
let userAttemptsCounter = 0;
// let timesShown = 0;
// let clicked = 0;
// Constructor Function
function Image(name, source) {
    this.name = name;
    this.source = source;
    this.shown = 0;
    this.votes = 0;

    Image.allImages.push(this);

    namesArr.push(this.name);


    
}

function saveChanges(){
    let arrayString = JSON.stringify(Image.allImages);
    localStorage.setItem('product', arrayString)

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

    while (image1Index === image2Index || image1Index === image3Index || image2Index === image3Index || noDuplicate.includes(image1Index) || noDuplicate.includes(image2Index) || noDuplicate.includes(image3Index)) {
        image1Index = generateRandomIndex();
        image2Index = generateRandomIndex();
        image3Index = generateRandomIndex();


    }
    // noDuplicate.push(image1Index);
    // noDuplicate.push(image2Index);
    // noDuplicate.push(image3Index);

    // console.log(image1Index);
    // console.log(image2Index);
    // console.log(image3Index);


    image1.src = Image.allImages[image1Index].source;
    Image.allImages[image1Index].shown++;

    image2.src = Image.allImages[image2Index].source;
    Image.allImages[image2Index].shown++;

    image3.src = Image.allImages[image3Index].source;
    Image.allImages[image3Index].shown++;

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

            Image.allImages[i].votes++;

            Image.allImages[image1Index].votes++;

        } else if (event.target.id === 'image2') {
            Image.allImages[image2Index].votes++;
        } else if (event.target.id === 'image3') {
            Image.allImages[image3Index].votes++;
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
    
                imageResult.textContent = `${Image.allImages[i].name} has ${Image.allImages[i].votes} clicks and was seen ${Image.allImages[i].shown} times`
    
            }
            button.removeEventListener('click', showResults);
            
            // console.log(imageResult)
        }

        for (let i = 0; i < Image.allImages.length; i++) {
            votesArr.push(Image.allImages[i].votes);
            shownArr.push(Image.allImages[i].shown);
            
          }
        // console.log(votesArr)
        chart();
        imagesDiv.removeEventListener('click', handleUserClick);
        saveChanges();
        // button.removeEventListener('click', showResults);
    }
    // button.removeEventListener('click', showResults);
}

function chart(){
var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: namesArr,
        datasets: [{
            label: 'Product Votes',
            data: votesArr,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});


}




}

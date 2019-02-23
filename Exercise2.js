var imageArray = ["image1.jpeg", "image2.jpeg", "image3.jpg", "image4.jpg", "image5.jpg"]
var currIndex = 0;

function previous() {
    document.getElementById('currImage').src = imageArray[Math.abs(1 - currIndex) % 5]; //returns the previous image
    currIndex--;
}

function next() {
    document.getElementById('currImage').src = imageArray[Math.abs(currIndex + 1) % 5]; //returns the next image
    currIndex++;
}
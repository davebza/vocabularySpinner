wordArray = ["Santa", "Reindeer", "Christmas tree", "Present", "Sleigh", "Bells"];
//pictureArray = ["santa.png", "christmasTree.png", "reindeer.png", "stocking.png"];
oldOutputWord = "";
oldOutputPicture = "";

function chooseWordForOutput(wordArray) {
    
    //Get a random word:
    
    var outputWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    
    // if the word is the same as the old word, choose again:
    if (outputWord === oldOutputWord){
        
        var outputWord = wordArray[Math.floor(Math.random() * wordArray.length)];
    }
    //return the word to the main function:
    return outputWord;
     
}

function choosePictureForOutput(pictureArray) {
    
    //Get a random pic:
    
    var outputPicture = pictureArray[Math.floor(Math.random() * pictureArray.length)];
    
    // if the pic is the same as the old pic, choose again:
    if (outputPicture === oldOutputPicture){
        
        var outputPicture = pictureArray[Math.floor(Math.random() * pictureArray.length)];
    }
    //return the pic to the main function:
    return outputPicture;
     
}

function displayPictureSpins(animateWord) {
    
    //get the picture from the word chosen, and perform some cleaning steps:
    var thisPicture = animateWord;
    if (thisPicture === "Christmas tree"){
        thisPicture = "christmasTree";
    }
    thisPicture = thisPicture.toLowerCase();
    
    //clear the picture output area
    var picNode = document.getElementById("pictureArea");
    while (picNode.hasChildNodes()) {
        picNode.removeChild(picNode.lastChild);
    }
    
    //Output the picture:
    var picOut = document.createElement("img");
    picOut.src = "images/"+thisPicture +".png";
    picOut.id = "picture";
    picNode.appendChild(picOut);
    //make a click sound and output it:
    var mySound = new Audio("http://www.freesfx.co.uk/rx2/mp3s/6/18661_1464810669.mp3");
    if (mySound) {
        mySound.play();
    }
}


function callAnimate() {
   //Set a variable for the word we're going to be using:
    var animateWord = "";
    
    //start the gradually slowing timer, which will clock the calls and the outputs:
    for (var i= 1; i < 3000; i *= 2) {

        var animateCall = setTimeout(function() {
        
            animateWord = chooseWordForOutput(wordArray);
            var picFiddle = displayPictureSpins(animateWord);
        
            oldOutputWord = animateWord;
        
            //clear the div in the document of the old word:
            var node = document.getElementById("outputArea");
            while (node.hasChildNodes()) {
                node.removeChild(node.lastChild);
                }
            //insert the new word and set the oldOutputWord to the word that's just been used:
            var output = document.createTextNode(animateWord);
            }, i);
        }
    
    var picNode = document.getElementById("pictureArea");
}


    

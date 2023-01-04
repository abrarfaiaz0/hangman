
const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const word = "REDMAN";

var guess = "______";
var chances = 8, correct = false;
var img = document.querySelector("#image");
img.setAttribute("src","src/"+chances+".png");


var g = document.querySelector(".guess"); 
g.innerHTML = guess;

function countLetterPressed(e){
    // console.log(e.currentTarget.pressedLetter);
    if (chances == 0)
    {
        console.log("LOST");
    }
    checkLetter(e.currentTarget.pressedLetter);
    if(correct == false)
        {
            chances -= 1 ;
            img.setAttribute("src","src/"+chances+".png");
            console.log("lives remaining : "+chances);
        }
    
    
    
}


function checkLetter(e){
    correct = false;
    for(var i=0; i<word.length;i++) {
        if (word[i] === e) 
        {
            guess = guess.substring(0,i)+e+guess.substring(i+1,word.length);
            g.innerHTML = guess; 
            console.log(word.length);
            correct = true;
        }
    }
    
}



const letter = document.querySelector(".letters");
alphabet.forEach(element => {
    // console.log(element);
    const newDiv = document.createElement("div");
    const newDiv2 = document.createElement("div");
    newDiv2.innerHTML = element;
    newDiv.appendChild(newDiv2);
    newDiv.classList.add("outer");
    newDiv2.classList.add("inner");
    newDiv2.classList.add(element);
    newDiv.addEventListener("click",countLetterPressed);
    newDiv.pressedLetter=element;
    letter.appendChild(newDiv);
});






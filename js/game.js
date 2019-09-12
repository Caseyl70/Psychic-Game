// array of options / selectors
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// variables for wins losses and guesses made by user and comnputer
var win = 0;
var loss = 0;
var left = 10;
var made = 0;
var gameOver = false;
var random = alpha[Math.floor(Math.random() * alpha.length)];
console.log("random", random);
// this will fucntion as amount of wins losses and guesses
function correctAnswer() {
    document.querySelector("#Wins").innerHTML = "Wins: " + win;
}

function wrongAnswer() {
    document.querySelector("#Loses").innerHTML = "Losses: " + loss;
}

function remaining() {
    document.querySelector("#Left").innerHTML = "Guesses Left: " + left;
}

function attempts() {
    document.querySelector("#Guesses").innerHTML = "Guesses: " + made;
}


// inputing function for the document.onkeyup and randomizes the selection of alpha
document.onkeyup = function(event) {
    var userInput = event.key;

    // console.log(userInput)
    console.log(userInput);
    made++;
    attempts();
    // if else for possible outcomes
    if (random === userInput) {
        win++;
        gameOver = true;
        left = 10;
        made = [];
        correctAnswer();
        alert("Shake N' Bake!")
    } else if (left === 1) {
        loss++;
        left = 10;
        remaining();
        wrongAnswer();
        alert("Not even close, Try again ")
    } else {
        left--;
        wrongAnswer();
        remaining();
        // alert("Give up.")
    }

    // retaining info from index.html
    // document.getElementById(".game");
}
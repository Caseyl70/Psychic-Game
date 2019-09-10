// array of options / selectors
var alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", ];
// variables for wins losses and guesses made by user and comnputer
var win = 0;
var loss = 0;
var left = 10;
var made = []
var userAttempt = document.onkeyup;
var roboAttempt = alpha[Math.floor(Math.random() * alpha.length)];
// inputing function for the document.onkeyup
document.onkeyup = function(event) {
    userAttempt = event.key;
    made.push(userAttempt);
    if (roboAttempt === userAttempt) {
        win++;
        left = 10;
        made = [];
        alert("Winner Winnner!")
    } else if (userAttempt === roboAttempt) {
        lose++;
        left = 10;
        made = [];
    }
    // retaining info from index.html
    document.getElementById(".game");
}
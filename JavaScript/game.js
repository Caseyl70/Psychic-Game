// Setting variables
var Winners = 0;
var Losers = 0;
var userGuesses = 10;
var letters = undefined;
var selection = [];

// computer generated guesses
var computerGuesses = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// compouter randomization
var computerGenerate = computerGuesses[Math.floor(Math.random() * computerGuesses.length)];
// When user presses a letter on keyboard
document.onkeyup = function() {

}
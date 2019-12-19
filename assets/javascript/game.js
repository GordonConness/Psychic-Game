var winsCount = 0;
var lossesCount = 0;
var turnCount = 10;
var guessedLetters = [];

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var randomLetter = Math.floor(Math.random() * alphabet.length);
var computerChoice = alphabet[randomLetter];
document.onkeyup = function(event)  {
    
    var userGuess = event.key;
    console.log(userGuess);

    function reset() {
        turnCount = 10;
        guessLetters = [];
        randomLetter = Math.floor(Math.random() * alphabet.length);
        computerChoice = alphabet[randomLetter];
    }
    if(userGuess === computerChoice) {
        winsCount++;
        alert("Winner Winner Chicken Dinner!");
        reset();
    }
    
    else if (turnCount === 0) {
        lossesCount++;
        guessedLetters;    
        alert("Ha! Loser!");
        reset();
    }

    else {
        turnCount--;
        guessedLetters;
        
    }
  
    var winsCountText = document.getElementById("winDisplay");
winsCountText.innerHTML = "Wins: " + winsCount;
var lossesCountText = document.getElementById("lossDisplay");
lossesCountText.innerHTML = "Losses: " + lossesCount;
var turnCountText = document.getElementById("guessesLeft");
turnCountText.innerHTML = "Guesses Left: " + turnCount;
var guessedLettersText = document.getElementById("guessesSoFar");
guessedLetters.innerHTML = "Your Guesses So Far: " + guessedLetters;


winsCountText.textContent = winsCount;
lossesCountText.textContent = lossesCount;
turnCountText.textContent = turnCount;
guessedLettersText.textContent = guessedLetters;
 };


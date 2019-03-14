//set variables
var letterToGuess;
var wins = 0
var loses = 0
var userGuess;
var guessesLeft = 10
var guessesSoFar = []
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v"]
var winsEL = document.getElementById("wins")
var losesEL = document.getElementById("loses")
var guessesLeftEL = document.getElementById("guessesLeft")
var guessesSoFarEL = document.getElementById("yourGuesses")
var random = Math.floor(Math.random() * letters.length)
var image = ""
console.log(letters[random])
var messageEL = document.getElementById("message")
winsEL.textContent = wins
losesEL.textContent = loses
guessesLeftEL.textContent = guessesLeft
guessesSoFarEL.textContent = guessesSoFar.join (" ")

var imageEL = document.getElementById("image")


function reset(didWin) {
    var message;
    if(didWin){
        message="Congrats you are a psychic";
        image="https://comps.canstockphoto.com/you-win-comic-explosion-cartoon-eps-vectors_csp40267134.jpg"

    }
    else{
        message="You are a fraud";
        image="https://www.g1023.com/wp-content/uploads/2018/03/Loser.jpg"

    }
    imageEL.src = image
    messageEL.textContent = message
    wins = 0
    loses = 0
    guessesLeft = 10
    guessesSoFar = []
    letterToGuess = letters [Math.floor(Math.random() * letters.length)]
}

//choose letter
//store letter to g
letterToGuess = letters[random]
//prompt for guess
document.onkeyup = function (event) {
    messageEL.textContent = ""
    userGuess = event.key
    if (userGuess === letterToGuess) {
        wins++
        winsEL.textContent = wins
        reset(true)
    }else {
        guessesLeft --
        guessesLeftEL.textContent = guessesLeft
        guessesSoFar.push(userGuess)
        guessesSoFarEL.textContent = guessesSoFar.join (" ")

    }
if (guessesLeft === 0) {
    loses ++
    losesEL.textContent = loses
    reset(false)
}
}

// check for wins

// guesses so far

// decrement guesses left

// increment guesses so far

// increment win/loss




















var inquirer = require('inquirer');
var words = require('./listArr.js');
var display = require('./letter.js');
var check = require('./word.js');

var currentWord;
var remainingGuesses = 10;
var wins = 0;
var losses = 0;
var showPlayer = [];
var checkLetter = [];
var wordsDisplayed = [];

function selectRandomWord(){
    var randomPick = Math.floor(Math.random() * 10)
    currentWord = words.possibleWords[randomPick];
    if(wordsDisplayed.includes(currentWord)){
        selectRandomWord();
    }else{
        showPlayer = new display(currentWord);
        checkLetter = new check(currentWord);
    }
    wordsDisplayed.push(currentWord);
}

function restartGame(){
    inquirer.prompt([{
        name: 'play',
        message: 'Play again? (y or n)'
    }]).then(function(answer){
        var confirm = answer.play.toLowerCase();
        if(confirm === 'y'){
            remainingGuesses = 10;
            checkLetter.lettersGuessed = [];
            currentWord = '';
            checkLetter.currentWordArray = [];

            selectRandomWord();
			console.log('');
			console.log('');
			console.log('=========================================================');
			console.log('HANGMAN');
			console.log('=========================================================');
			console.log('Welcome to the Hangman Game - The Hall and Oates Edition (you are welcome).');
			console.log('Let\'s get to guessing!');
			console.log('');
			console.log('Guess This Word:'); 
			showPlayer.originalDisplay();
			console.log('');
			console.log('Guesses Remaining: ' + remainingGuesses);
			console.log('');
			guessLetters();
		}else if(confirm === 'n'){
            console.log('See ya, BYE!')
            console.log('');
        }else{
            console.log('Please select \'y\' or \'n\'');
			console.log('');
			restartGame();

        }
    })
};

restartGame();
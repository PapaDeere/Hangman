var villainName = require("./villainName.js");
var VillainCons = require("./villains.js");
var letterCons = require("./letter.js");
var inquirer = require("inquirer");
var letterGuessed;

//var myVill = new villainCons.villainCons(game.villainName);
var myVill = new VillainCons(villainName);
console.log(myVill);
var maxGuesses = 16;

function takeAGuess() {
    console.log(myVill.toString());
    if (myVill.guessesMade.length >= maxGuesses) {
        console.log("You have used up all of your guesses.");
        return; // end game
    }
    inquirer.prompt([{
        name: "letter",
        type: "text",
        message: "Enter a letter:",
        validate: function(str) {
            if (str.length != 1) return false;
            var regEx = new RegExp("^[a-zA-Z\s]{1,1}$");
            return regEx.test(str);
        }
    }]).then(function(letterInput) {
        var letter = letterInput.letter;
        myVill.findLetter(letter); //check
        if (myVill.isComplete()) {
            console.log("YES!! It was " + myVill.toString() + "|");
            return; // winner winner chicken dinner
        }
        console.log("------------------------\n"); //next guess
        console.log("You have " + (maxGuesses - myVill.guessesMade.length) + " guesses left.")
        takeAGuess(); //recursive call
    });
}
takeAGuess(); //game start
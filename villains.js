//check the letters guessed against the villain selected.
var letterCons = require("./letter.js");

function Villain(value) {
    this.value = value;
    this.letters = [];
    this.guessesMade = "";
    for (var i = 0; i < this.value.length; i++) {
        this.letters.push(new letterCons(this.value[i]));
    }
    console.log(this.letters);
};

Villain.prototype.isComplete = function() {
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].show) return false;
    }
    return true;
}

Villain.prototype.findLetter = function(letter) {
    var upperLetter = letter.toUpperCase();
    if (this.guessesMade.indexOf(upperLetter) != -1) {
        return "Duplicate, try again";
    }
    this.guessesMade += upperLetter;
    for (var i = 0; i < this.letters.length; i++) {
        if (this.letters[i].value.toUpperCase() == upperLetter) {
            this.letters[i].show = true;
        }
    }
};

Villain.prototype.toString = function() {
    var output = "";
    for (var i = 0; i < this.letters.length; i++) {
        output += this.letters[i].printInfo();
    }
    return output;
}

module.exports = Villain;
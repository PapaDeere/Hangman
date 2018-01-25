//select and export a random villain
var villainsToGuess = ["Ursula", "Maleficent", "Cruela de Vil", "the Wicked Queen", "Queen of Hearts", "Scar", "Jafar", "Mystique", "Stepmother", "Wicked Witch of the West", "Talia al Ghul", "Angelica", "Natasha Fatale", "Magica De Spell", "Princess Azula", "Queen Beryl", "Demona", "Madame Medusa"];
var villainIndex = Math.floor(Math.random() * villainsToGuess.length);
var villainName = villainsToGuess[villainIndex];
//console.log(villainName);
exports.villainName = villainName;
const chalk = require('chalk');

//Module provenant de npm
const slugify = require('slugify');
const lottery = require('./modules/lottery');

// Module crée par le dev
const {calc} = require('./modules/calc')

console.log(calc(2,5));
console.log(slugify('Bienvenue a Paris',{lower: true}));



// Test pour la méthode loto
console.log(chalk.green("Tirage de la super lotterie:"))
console.log(chalk.red(lottery.lottery(1, 50, 7)).replaceAll(',', chalk.green('-')));

// Test pour la méthode gagnant
const participants = ["Alice", "Bob", "Charlie"];
console.log("Le grand gagnant de notre loterie est:", chalk.red(lottery.gagnant(participants)));

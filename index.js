// // Module provenant de npm
// const slugify = require('slugify');

// // Module crée par le dev
// const { calc, multiply } = require('./modules/calc');

// /*
// Si l'export du module s'est fait avec : 
// module.exports = calc
// const  calc  = require('./modules/calc');
// */

// console.log(calc(2, 5));
// console.log(multiply(2, 5));
// console.log(slugify('Bienvenue a Paris', { lower: true }));
// // Bienvenue a Paris
// // bienvenue-a-paris

const fs = require('fs'); // File System

// `readFileSync` permet de lire un fichier tous extensions
const textIn = fs.readFileSync('./text.txt', 'utf-8')
console.log(textIn);

// `Ecrire un fichier
const textOut = `John Doe says ${textIn}`
fs.writeFileSync('./textOut.txt', textOut, 'utf-8')
// ascii
// const os = require('os');

// // Il permet d'accéder au fichier `.env`
// require('dotenv').config();

// // Chemin de l'accueil
// console.log(os.homedir());

// console.log(process.env.API_STRIP);

// // std
// console.log(
//   '/* ---------------------------- exemple avec std ---------------------------- */'
// );

// const pizzas = [
//   {
//     name: '4 fromages',
//     price: 10,
//   },
//   {
//     name: 'caniball',
//     price: 12,
//   },
// ];

// Pour afficher un message au lancement du programme
// Il faut mettre le code a l'exterieur de l'event `process.stdin.on`

/* 
console.log('Quelle pizza voulez-vous ?');

process.stdin.on('data', (chunk) => {
  
  // const text = chunk.toString();
  // console.log('Text entered :', text); 
  // Converti en string par default c'est un buffer
  const answer = chunk.toString().toLowerCase().trim();

  const pizzaFilter = pizzas.filter((item) => item.name.toString() === answer)
  console.log(`Price : ${pizzaFilter[0].price} €`);
}); */

/*
console.log('Quel age votre age ?');

process.stdin.on('data', (chunk) => {
  const age = chunk.toString();

  if (Number(age) >= 18) {
    process.stdout.write('Vous pouvez conduire \n');
  } else {
    process.stderr.write('Vous NE pouvez PAS conduire \n');
  }
});
 */
// console.log('Devine mon nombre secret ? saissir un nombre entre 1 et 100 🔐');

// const secretNumber = Math.floor(Math.random() * 101);
// console.log(secretNumber);
// // TENTATIVE
// let attempts = 10;

// process.stdin.on('data', (chunk) => {
//   const guessNumber = Number(chunk.toString());

//   if (attempts === 0) {
//     process.stdout.write(
//       `GAME OVER 🚨🚨🚨, le nombre secret était ${secretNumber}/n`
//     );
//   } else if (guessNumber > 100) {
//     attempts--;
//     process.stdout.write(
//       `Le nombre sassie est supérieur a 100. Merci de saissir un nombre entre 1 et 100, vie restant ${attempts} 💥/n`
//     );
//   } else if (guessNumber > secretNumber) {
//     attempts--;
//     process.stdout.write(
//       `Le nombre secret est le plus petit, vie restant ${attempts} 💥/n`
//     );
//   } else if (guessNumber < secretNumber) {
//     attempts--;
//     process.stdout.write(
//       `Le nombre secret est le plus grand, vie restant ${attempts} 💥/n`
//     );
//   } else {
//     process.stdout.write('Félicitation vous avez trouvé le nombre secret 🎉');
//   }
// });

// console.log('Guess a number from 1 to 10:');

// let tryLeft = 1;
// let random = Math.floor(Math.random() * 10) + 1;
// process.stdin.on('data', (chunk) => {
// let userNumber = chunk.toString();
// while (userNumber!== random && tryLeft <10)
//     userNumber;
//     random;
//   tryLeft ++;
//   if (Number(userNumber) === random) {
//     process.stdout.write(`Vous avez trouvé ${random}`);
//   } else {
//     process.stderr.write('Guess a number from 1 to 10: \n');
//   }

// });

// let tryLeft = 10;
// let random = Math.floor(Math.random() * 10) + 1;
// process.stdin.on('data', (chunk) => {
// let userNumber = chunk.toString();

//     if(userNumber!== random && tryLeft <10)
//     userNumber=chunk.toString();
//     random;
//     tryLeft --;
//   if (Number(userNumber) === random) {
//     process.stdout.write(`Vous avez trouvé ${random}\n`);
//     rc
//     tryLeft=0;
//   } else {
//     process.stderr.write(`Vous avez ${tryLeft} tentative\n`);
//     if(userNumber > random)
//     process.stderr.write('Votre nombre est plus grand \n'); 
//   else { process.stderr.write('Votre nombre est plus petit \n') }} 
// }
// process.stderr.write('Trouvé le nombre: \n'); 
// console.log(random)
// });
const fs = require('fs'); // File System
const http = require('http');
const url = require('url');
const books = require('./data/data.json');
const path = require('path');
/* -------------------------------------------------------------------------- */
/*                                  SYNCHRONE                                 */
/* -------------------------------------------------------------------------- */
// `readFileSync` permet de lire un fichier tous extensions
/* const textIn = fs.readFileSync('./text.txt', 'utf-8');
console.log('Synchrone', textIn); */

// Ecrire un fichier
const textOut = 'Node is amazing à';

/* 
`writeFileSync` permet de créer un fichier en ajoutant les données
qu'on veut dedans

par exemple: on veux un fichier nommé `textOut.txt` contenant une phrase
"Node is amazing"

fs.writeFileSync(chemin_du_fichier_a_créer, data, encodage)
*/
/* fs.writeFileSync('./textOut.txt', textOut, 'utf-8'); */

/* -------------------------------------------------------------------------- */
/*                                 ASYNCHRONE                                 */
/* -------------------------------------------------------------------------- */

/* `readFile` est la méthode asynchrone pour lire un fichier il prend une fonction en call back
Cette fonction prend 2 params 
`err` => pour quand il y a une erreur
`data` => retourner le contenu du fichier lu.
*/
/* fs.readFile('./text.txt', 'utf-8', (err, data) => {
  if (err) console.log(err);
  console.log('Asynchrone', data);
});

console.log('Preparing file...'); */

/* -------------------------------------------------------------------------- */
/*                               Create a server                              */
/* -------------------------------------------------------------------------- */
const server = http.createServer();
// Creer un server au port 3000 => localhost:3000
server.listen(3000, () => console.log('App running on port 3000'));

// Attend une requete
server.on('request', (request, response) => {
  // Url.parse déprécié
  // const pathname = url.parse(request.url);
  const url = new URL(`http://${request.headers.host}${request.url}`);

  // Routage avec node.js
  if (url.pathname === '/') {
    response.writeHead(200, 'ok', {
      'content-type': 'text/html',
    });
    const file = `${__dirname}/templates/template-overview.html`;
    fs.readFile(file, 'utf-8', (err, data) => {
      const allCards = [];

      // Récuperer le card template
      const templateCard = fs.readFileSync(
        `${__dirname}/templates/template-card.html`,
        'utf-8'
      );

      const replaceDataTemplate = function (item, index) {
        /*
      console.log(item.image);
        const imagePath = path.join(`${__dirname}${item.image}`);


        const image =  new URL.createObjectURL(imagePath)
        console.log(image);
         */
        let replaceCard = templateCard
          .replace('{% RELEASE_DATE %}', item.releaseDate)
          .replace('{% NAME %}', item.title)
          .replace('{% DESCRIPTION %}', item.description)
          .replace('{% AUTHOR %}', item.author)
          .replace('{% LINK %}', `/book?id=${index}`);

        return replaceCard;
      };

      for (const [index, item] of books.entries()) {
        allCards.push(replaceDataTemplate(item, index));
      }

      // `join` permet de définir le séparation des elements contenu dans une liste (tableau)
      const card = data.replace('{% CARD %}', allCards.join(' '));

      response.end(card);
    });
  } else if (url.pathname === '/book') {
    console.log(url.search);
    const params = new URLSearchParams(url.search);
    const id = params.get('id');

    console.log(books[id]);

    const item = books[id];

    response.writeHead(200, 'ok', {'content-type': 'text/html'});
    response.end(item.title);
  } else {
    response.writeHead(404, 'Not Found');

    response.end('This page do not exist');
  }
});
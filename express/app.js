// Importe le module 'http-errors' pour gérer les erreurs HTTP facilement.
const createError = require('http-errors');

// Importe le module 'fs' pour lire ou ecrire un fichier
const fs = require('fs');

// Importe Express.js, un framework pour créer des applications web en Node.js.
const express = require('express');

// Importe le module 'path' pour travailler avec les chemins de fichiers et répertoires.
const path = require('path');

// Importe 'cookie-parser' pour analyser les cookies des requêtes HTTP.
const cookieParser = require('cookie-parser');

// Importe 'morgan', un middleware de journalisation des requêtes HTTP.
const logger = require('morgan');

// Crée une instance de l'application Express.
const app = express();

// view engine setup
// Définit le dossier contenant les templates de vues.
app.set('views', path.join(__dirname, 'views'));

// Utilise EJS comme moteur de template.
app.set('view engine', 'ejs');

// Utilise Morgan pour journaliser les requêtes en mode 'développement'.
app.use(logger('dev'));

// Permet à Express de reconnaître les requêtes entrantes comme des objets JSON.
app.use(express.json());

// Permet à Express de reconnaître les requêtes entrantes comme des chaînes ou tableaux.
app.use(express.urlencoded({ extended: false }));

// Active le middleware 'cookie-parser' pour analyser les cookies des requêtes.
app.use(cookieParser());

// Sert les fichiers statiques (comme CSS, JS, images) dans le dossier 'public'.
app.use(express.static(path.join(__dirname, 'public')));

/* --------------------------------- Accueil -------------------------------- */
app.get('/', (req, res) => {
  // 1) Lire le fichier data.json

  fs.readFile(`${__dirname}/public/data.json`, 'utf-8', (err, data) => {
    const books = JSON.parse(data);

    res.render('home', { books });
  });
});

/* ------------------------------- Page detail ------------------------------ */
app.get('/:title', (req, res) => {
  const params = req.params;
  console.log(params);

  fs.readFile(`${__dirname}/public/data.json`, 'utf-8', (err, data) => {
    const books = JSON.parse(data);
    // 1) Methode 1 Récuperer le livre grace à son index
    // Il faudra mettre l'index sur le lien du livre
    // const item = books[params.id];

    const item = books.find((element) => element.title === params.title);

    if (!item) res.render('error');

    res.render('detail', { book: item });
  });
});
module.exports = app;

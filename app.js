// Import des modules

const express = require('express');



//Import de nos données articles
const articles = require('./data/article.json');


//initialisation de l'application

const app = express();

//Notre port où passent toutes les requêtes

const port = 3000;

//Localisation des vues
app.set('views', './views');

//le moteur de vues à utiliser
app.set('view engine', 'ejs');


// Mon dossier public où se trouvent les fichiers statics
app.use(express.static('./public'));

//definir la variable rightarticle pour la rendre ensuite accesible à la vue via app.use
let theRightArticle = null;

//Mes routes
const articleRouter = require('./router/route');

//Utilisation du module route créé
app.use(articleRouter);

// Le serveur est à l'écoute


app.listen(port, () => console.log(`On ecoute sur : http://localhost:${port}/`));
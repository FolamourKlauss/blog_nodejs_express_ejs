// Import des modules

const express = require('express');
const router = express.Router();


//Import de nos données articles
const articles = require('../data/article.json');



//definir la variable rightarticle pour la rendre ensuite accesible à la vue via router.use
let theRightArticle = null;

//Mes routes

//Passer la variable article à la vue
router.use((req, res, next) => {
    res.locals = { articles };
    next();
});

// Page d'accueil

router.get('/', (req, res) => {
    res.render('index');
});

//Detail d'un article

router.get('/article/:id', (req, res) => {
    const articleId = req.params.id;
    console.log(typeof(articleId));

    // on va parcourir notre array de'articles à la recherche de celui qu'on a demandé
    theRightArticle = articles.find((goodArticle) => {
        return goodArticle.id === Number(articleId);
    });
    //res.locals = { theRightArticle}; 1ere facon de passer la prop à lobjet locals
    console.log(theRightArticle);
    res.render('articledetails', { theRightArticle }); //seconde façon de le faire

});

module.exports = router;
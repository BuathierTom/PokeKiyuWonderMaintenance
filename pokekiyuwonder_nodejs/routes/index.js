// require
const express = require('express');
const app = express();

// require pour l'ensemble des routes
const types = require('./types');
const pokemons = require('./pokemons')

// require pour les options de cors (permettant d'accepter les requêtes)
const cors = require('cors');
const corsOptions = {
    origin: ['http://127.0.0.1:8080', 'http://localhost:8080'],
};

app.use(cors(corsOptions));

app.use(express.json());

// Mise en place de l'ensemble des routes
app.use('/types', types);
app.use('/pokemons', pokemons);

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

// Routes permettant d'avoir les fonctions concernant les types
app.get('/types', (req, res, next) => {
    res.send("Hello Types!");
});

// Routes permettant d'avoir les fonctions concernant les pokémons
app.get('/pokemons', (req, res, next) => {
    res.send("Hello Pokemons!");
});

module.exports = app
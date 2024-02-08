// require
const express = require("express");
const router = express.Router();
const { getallPokemons } = require("../controllers/pokemons");

// Ensemble des routes permettants d'exécuter les fonctions concernant les pokémons
// Fonction getall
router.get("/getall", getallPokemons);

module.exports = router;
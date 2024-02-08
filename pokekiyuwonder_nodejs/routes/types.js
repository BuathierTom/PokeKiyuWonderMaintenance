// require
const express = require("express");
const router = express.Router();
const { getallTypes } = require("../controllers/types");

// Ensemble des routes permettants d'exécuter les fonctions concernant les types
// Fonction getall
router.get("/getall", getallTypes);

module.exports = router;
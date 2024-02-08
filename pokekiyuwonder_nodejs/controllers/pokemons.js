// require
const { getallPokemon } = require("../services/pokemonsService");

// Cette fonction va permettre de récupérer l'ensemble des pokémons présent dans l'API
async function getallPokemons(req, res, next) {
    try{
        const result = await getallPokemon();
        return res.send(result);
    } catch (e){
        console.error(`Il y a une erreur dans la méthode constrollers/types.getallPokemons : ${e}`)
    }
}

module.exports = {
    getallPokemons
}
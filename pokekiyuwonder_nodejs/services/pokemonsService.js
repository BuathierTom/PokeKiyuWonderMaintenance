// require
const axios = require('axios');

// Cette fonction va permettre de récupérer l'ensemble des pokémons présent dans l'API
async function getallPokemon() {
  try {
    // Appel à l'API
    const response = await axios.get('https://pokebuildapi.fr/api/v1/pokemon');
    const pokemons = response.data;
    return pokemons;
  } catch (error) {
    console.error(`Il y a une erreur dans la fonction getallPokemon : ${error.message}`);
    throw error;
  }
}

module.exports = {
    getallPokemon
}

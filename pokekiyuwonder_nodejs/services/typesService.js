// require
const axios = require('axios');

// Cette fonction va permettre de récupérer l'ensemble des types présent dans l'API
async function getallType() {
  try {
    // Appel à l'API
    const response = await axios.get('https://pokebuildapi.fr/api/v1/types');
    const types = response.data;
    return types;
  } catch (error) {
    console.error(`Il y a une erreur dans la fonction getallType : ${error.message}`);
    throw error;
  }
}

module.exports = {
    getallType
}

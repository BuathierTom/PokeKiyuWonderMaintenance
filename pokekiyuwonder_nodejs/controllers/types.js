// require
const { getallType } = require("../services/typesService");

// Cette fonction va permettre de récupérer l'ensemble des types présent dans l'API
async function getallTypes(req, res, next) {
    try{
        const result = await getallType();
        return res.send(result);
    } catch (e){
        console.error(`Il y a une erreur dans la méthode constrollers/types.getallTypes : ${e}`)
    }
}

module.exports = {
    getallTypes
}
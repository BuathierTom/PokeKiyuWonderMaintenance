// import
import axios from 'axios';

// Ce service va permettre de pouvoir gérer l'ensemble des intéractions qu'on veut pouvoir faire avec les types de pokémon
class getTypeService {
  // Cette méthode va pemrettre d'appeler l'API pour pouvoir récupérer l'ensemble des types
  async getTypes() {
      // Appel à l'API
      const response = await axios.get('http://localhost:3000/types/getall')
      return response.data;
  }
}

export default new getTypeService();

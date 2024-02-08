// import
import axios from 'axios';

// Ce service va permettre de pouvoir gérer l'ensemble des intéractions qu'on veut pouvoir faire avec les pokémons
class getPokemonService {
  // Cette méthode va permttere de faire appel à l'API pour pouvoir récupérer l'ensemble des pokémons disponibles
  async getPokemons() {
      // Appel à l'API
      const response = await axios.get('http://localhost:3000/pokemons/getall');
      return response.data;
  }
}

export default new getPokemonService();
import axios from 'axios';
import SearchBar from '../../components/SearchBar/SearchBar.vue';
import ListPokemon from '../../components/ListPokemon/ListPokemon.vue';
export default {
    data() {
        return {
            searchTerm: '',
            team: [],
            hidden : null,
            isLoading : false
        };
    },
    mounted() {
        this.fetchPokemonData();
    },
    methods: {
        // Récupération du terme de recherche
        handleSearch(term) {
            this.searchTerm = term;
        },
        // Remplissage du LocalStorage du navigateur avec l'api
        async fetchPokemonData() {
            if (!localStorage.listPokemon) {
                try {
                    const response = await axios.get('https://pokebuildapi.fr/api/v1/pokemon');
                    const parsed = JSON.stringify(response.data);
                    localStorage.setItem('listPokemon', parsed);
                    
                }
                catch (error) {
                    console.error('Une erreur s\'est produite lors de la récupération des données Pokémon', error);
                }
            }
        },
        // Gestion du click PokemonProfil Pour cacher la barre de recherche
        clickPokemonProfilEmit(){
            this.hidden = true;
        },
        // Gestion du click sur un Profil Pour voir la barre de recherche
        clickQuitPokemonProfilEmit(){
            this.hidden = null;
        }
    },
    components: { SearchBar ,ListPokemon }
};
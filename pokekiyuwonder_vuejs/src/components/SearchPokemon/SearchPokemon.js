import SearchBar from '../SearchBar.vue';
import ListPokemon from '../ListPokemon.vue';
import getPokemonService from '@/services/getPokemonService';


export default {
    data() {
        return {
            searchTerm: '',
            team: [],
            hidden : null
        };
    },
    mounted() {
        this.fetchPokemonData();
    },
    methods: {
        handleSearch(term) {
            this.searchTerm = term;
        },
        addToTeam(pokemon) {
            this.team.push(pokemon);
        },
        async fetchPokemonData() {
            if (!localStorage.listPokemon) {
                try {
                    const response = await getPokemonService.getPokemons();
                    const parsed = JSON.stringify(response);
                    localStorage.setItem('listPokemon', parsed);
                }
                catch (error) {
                    console.error('Une erreur s\'est produite lors de la récupération des données Pokémon', error);
                }
            }
        },
        clickPokemonProfilEmit(){
            this.hidden = true;
        },
        clickQuitPokemonProfilEmit(){
            this.hidden = null;
        }
    },
    components: { SearchBar, ListPokemon }
};
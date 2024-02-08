import CompartmentPokemon from '../CompartmentPokemon/CompartmentPokemon.vue';
import ProfilePokemon from '../ProfilePokemon/ProfilePokemon.vue';

export default {

    data() {
        return {
            // La liste complete des Pokémons
            pokemons: [],

            // Le nombre de page actuel
            page : 0,

            // La liste des Pokémons filtré par la recherche
            listPokemonView : [],

            // Le pokémon cliqué (égale a null si aucun)
            seletedPokemon : null,
        };
    },
    props: {
        searchTerm: String,
    },
    computed: {

        // Renvoie les pokémons qu'il faut affiché
        filteredPokemons() {
            return this.listPokemonView.slice(this.page * 15, (this.page + 1) * 15);
        },

        // Renvoie la page ou se trouve l'utilisateur
        getPage(){
            return this.page + 1;
        },
    },
    mounted() {
        //on récupére la liste de Pokémon dans le LocalStorage
        try{
            this.pokemons = JSON.parse(localStorage.getItem("listPokemon"));      
            this.listPokemonView = JSON.parse(localStorage.getItem("listPokemon"));
        }
        catch(error){
            console.error("Une erreur c'est produite lors de la récupération des donnnées Pokémons dans le localStorage", error);
        }
    },
    methods: {
        // Modifie la page actuel en additionnant ou soustraiant un nombre
        changePage(numberPage){
            this.page += numberPage;
        },

        // Renvoie si on est à la premier page
        isFirstPage(){
            return this.page === 0;
        },

        // Renvoie si on est à la derniere page
        isLastPage(){
            return this.page === this.listPokemonView.length;
        },

        // Affecte a la variable seletedPokemon un pokemon en parametre
        clickedPokemonProfil(pokemon){
            this.seletedPokemon = pokemon;
        },

        // Met a null la variable seletedPokemon
        closeProfilPokemon(){
            this.seletedPokemon = null;
        },

        // Permet le changement du composant ProfilePokemon en fesant un refresh d'un tick entre l'ancien et nouveau Pokémon
        async clickOtherProfil(newPokemonId){
            this.seletedPokemon = null;

            await this.$nextTick();
            
            this.seletedPokemon = JSON.parse(localStorage.getItem("listPokemon"))[newPokemonId - 1]
        },

        // Permet de refresh la page du pokémon séléctionné
        async refreshPokemon(){
            var tempSeletedPokemon = this.seletedPokemon;
            this.seletedPokemon = null

            await this.$nextTick();
            
            this.seletedPokemon = tempSeletedPokemon;
        }
    },
    watch: {

        // Permet de vérifié que la variable searchTerm est modifié pourr mettre a jour les pokémons que l'on voit
        searchTerm() {
            this.page = 0;
            this.listPokemonView = this.pokemons.filter(pokemon => pokemon.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
        }
    },

    components: { CompartmentPokemon, ProfilePokemon }
};
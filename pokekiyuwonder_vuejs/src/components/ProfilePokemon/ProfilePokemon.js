import CompartmentPokemon from '../CompartmentPokemon/CompartmentPokemon.vue';
import Swal from 'sweetalert2'

export default {

  props: {
        pokemonData : Object
    },
    data() {
        return {
            // La couleur des stats
            hp : "#00a8cc",
            attack : "#00a8cc",
            defense : "#00a8cc",
            special_attack : "#00a8cc",
            special_defense : "#00a8cc",
            speed : "#00a8cc",

            // Contient la préEvoliton s'il y en a une
            preEvolution : {},

            // Contient la ou les évolution s'il y en a
            evolution : []
        };
    },
    mounted() {

        // Met la couleur que va contenir la barre de stastique 
        this.hp = this.colorJauge(this.pokemonData.stats.HP);
        this.attack = this.colorJauge(this.pokemonData.stats.attack);
        this.defense = this.colorJauge(this.pokemonData.stats.defense);
        this.special_attack = this.colorJauge(this.pokemonData.stats.special_attack);
        this.special_defense = this.colorJauge(this.pokemonData.stats.special_defense);
        this.speed = this.colorJauge(this.pokemonData.stats.speed);

        // Vérifie s'il y a une pré Évolution
        if(this.pokemonData.apiPreEvolution != 'none'){

            // Affecte la pré Évolution à la variable preEvolution
            this.preEvolution = JSON.parse(localStorage.getItem("listPokemon"))[this.pokemonData.apiPreEvolution.pokedexIdd - 1];
        }

        // Vérifie s'il y a un ou des évolutions
        if(this.pokemonData.apiEvolutions.length != 0){
            this.pokemonData.apiEvolutions.forEach(element => {
                // Ajoute dans la liste l'évolution trouver
                this.evolution.push(JSON.parse(localStorage.getItem("listPokemon"))[element.pokedexId - 1]);
            });
        }
    },
  methods: {

    // Fonction qui renvoie la couleur selon la stat donné en paramétre
    colorJauge(valueStat) {
      if(valueStat < 50){
        return '#c00';
      }
      else if(valueStat < 75){
        return '#cc5200';
      }
      else if(valueStat < 100){
        return '#cc7d00';
      }
      else if(valueStat < 125){
        return '#ccc500';
      }
      else if(valueStat < 150){
        return '#60cc00';
      }
      else{
        return '#00a8cc';
      }
    },

    // Fonction qui renvoie la couleur de la resistance
    colorResistance(valueResistance){
        if(valueResistance === 0.25){
            return '#3d3';
        }
        else if(valueResistance === 0.5){
            return '#afa';
        }
        else if(valueResistance === 1){
            return '#eec';
        }
        else if(valueResistance === 2){
            return '#f92';
        }
        else if(valueResistance === 4){
            return '#e66';
        }
    },

    // Fonction qui renvoie le symbole pour les resitances 0.25 et 0.5
    statResistance(valueStatResistance){
        if(valueStatResistance === 0.25){
            return '¼';
        }
        else if(valueStatResistance === 0.5){
            return '½';
        }
        else{
            return valueStatResistance;
        }
    },

    // Ajout a l'équipe mise en paramétre sinon renvoie une une erreur car l'équipe est complete 
    addTeam(team){
        var equipe = JSON.parse(localStorage.getItem(team));
    
        // Vérifier si l'équipe existe déjà dans le localStorage
        if (!equipe) {
            equipe = [];
        }
    
        // Vérifier si l'équipe est pleine (limite de 6 Pokémon par équipe)
        if (equipe.length >= 6) {
            Swal.fire({
                title: 'Erreur!',
                text: 'Vous avez déjà 6 pokémons dans votre équipe',
                icon: 'error',
                confirmButtonText: 'Quitter'
            });
            return; // Arrêter l'exécution de la méthode si l'équipe est pleine
        }
    
        // Vérifier si le Pokémon est déjà dans l'équipe
        if (this.isTeam(team)) {
            Swal.fire({
                title: 'Erreur!',
                text: 'Ce pokémon est déjà dans votre équipe',
                icon: 'error',
                confirmButtonText: 'Quitter'
            });
            return; // Arrêter l'exécution de la méthode si le Pokémon est déjà dans l'équipe
        }
    
        // Ajouter le Pokémon à l'équipe
        equipe.push(this.pokemonData);
        localStorage.setItem(team, JSON.stringify(equipe));
    },

    // Retire de l'équipe le Pokémon et supprime l'équipe du localStorage si elle est vide
    removeTeam(team){
        var equipe = JSON.parse(localStorage.getItem(team));

        // Recherche le pokémon pour le supprimer
        for(var indexListPokemon = 0; indexListPokemon < equipe.length; indexListPokemon ++){
            if(equipe[indexListPokemon].name === this.pokemonData.name){
                    equipe.splice(indexListPokemon, 1);
                }  
        }

        // Si la liste est vide il la supprime du localStorage
        if(equipe.length == 0){
            localStorage.removeItem(team);
        }
        else{
            localStorage.setItem(team, JSON.stringify(equipe));
        }
            
    },

    // Fonction qui renvoie si le pokémon est dans l'équipe mise en paramétre
    isTeam(team) {
        // Vérifier si l'équipe existe dans le localStorage
        var equipe = JSON.parse(localStorage.getItem(team));
        if (!equipe) {
            return false; // L'équipe n'existe pas, donc le Pokémon ne peut pas être dedans
        }
    
        // Vérifier si le Pokémon est déjà dans l'équipe
        return equipe.some(pokemon => pokemon.id === this.pokemonData.id);
    }


  },
   components: { CompartmentPokemon }
};
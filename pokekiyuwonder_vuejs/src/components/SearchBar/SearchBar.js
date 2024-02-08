export default {
data() {
    return {
    searchTerm: '',
    };
},
methods: {

    // Fait un emit pour la recherche
    filterPokemon() {
        this.$emit('search', this.searchTerm);
    },
},
};

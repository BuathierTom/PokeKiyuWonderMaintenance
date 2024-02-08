<!-- RechercheAjout.vue -->
<template>
    <div>
      <BarreRecherche @search="handleSearch" />
      <ListePokemon :searchTerm="searchTerm" @addToTeam="addToTeam" />
    </div>
  </template>
  
  <script>
  import BarreRecherche from '@/components/BarreRecherche.vue';
  import ListePokemon from '@/components/ListePokemon.vue';
  
  export default {
    data() {
      return {
        searchTerm: '',
      };
    },
    methods: {
      handleSearch(term) {
        this.searchTerm = term;
      },
      addToTeam(pokemon) {
        this.$emit('addToTeam', pokemon);
      },
    },
    components: {
      BarreRecherche,
      ListePokemon,
    },
  };
  </script>
  
  <style scoped>
  </style>
  
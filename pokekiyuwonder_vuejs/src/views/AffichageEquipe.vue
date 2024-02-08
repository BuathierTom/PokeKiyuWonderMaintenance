<!-- AffichageEquipe.vue -->
<template>
    <div>
      <h1>Équipe Pokémon</h1>
      <EquipePokemon :team="team" />
    </div>
  </template>
  
  <script>
  import EquipePokemon from '@/components/EquipePokemon.vue';
  
  export default {
    props: {
      team: Array,
    },
    components: {
      EquipePokemon,
    },
  };
  </script>
  
  <style scoped>
  </style>
  
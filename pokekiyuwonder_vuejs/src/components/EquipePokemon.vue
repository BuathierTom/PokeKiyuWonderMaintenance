<!-- EquipePokemon.vue -->
<template>
    <div>
      <ul>
        <li v-for="pokemon in team" :key="pokemon.id">
          {{ pokemon.name }}
          <img src="{{ pokemon.image }}">
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      team: Array,
    },
  };
  </script>
  
  <style scoped>
  </style>
  
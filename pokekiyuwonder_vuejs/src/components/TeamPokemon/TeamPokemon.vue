<template>
  <div>
    <button v-if="team1.length == 0 && team2.length == 0 " @click="generateRandomTeam">Générer une équipe aléatoire</button>

    <h1 id="team" v-if="team === 'team1'">Team 1</h1>
    <div>
      <table v-if="team === 'team1'" class="type-table">
        <thead>
          <tr>
            <th class="empty-case"></th>
            <th v-for="pokemon in team1" :key="pokemon.id">
              <img :src="pokemon.image" :alt="pokemon.name" class="small-image">
            </th>
            <th class="empty-case"></th>
          </tr>
        </thead>
      </table>
      <table v-if="team === 'team2'" class="type-table">
        <thead>
          <tr>
            <th class="empty-case"></th>
            <th v-for="pokemon in team2" :key="pokemon.id">
              <img :src="pokemon.image" :alt="pokemon.name" class="small-image">
            </th>
            <th class="empty-case"></th>
          </tr>
        </thead>
      </table>
    </div>
    <h1 id="team" v-if="team === 'team2'">Team 2</h1>
  </div>
</template>

<script src="./TeamPokemon.js"></script>
<style src="./TeamPokemon.css"></style>


<template>
    <div>
        <input v-model="searchTerm" @input="filterPokemon" placeholder="Rechercher un Pokémon" />
    </div>
</template>

<script src="./SearchBar.js"></script>
<style src="./SearchBar.css"></style>
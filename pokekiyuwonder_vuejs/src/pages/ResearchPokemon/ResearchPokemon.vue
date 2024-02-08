<template>
    <!-- composant SearchBar permet la recherche -->
    <SearchBar v-if="!hidden && isLoading != false" @search="handleSearch"/>

    <!-- composant ListPokemon permet de gerer l'affichage des pokémons -->
    <ListPokemon v-if="isLoading != false" :searchTerm="searchTerm"  @click-pokemon-profil-emit="clickPokemonProfilEmit()" @click-quit-pokemon-profil-emit="clickQuitPokemonProfilEmit()"/>
    <div id="loadingImage" >
        <img v-if="isLoading === false" src="../../asset/pokemonSpinner.gif">
    </div>
</template>

<script src="./ResearchPokemon.js"></script>
<style src="./ResearchPokemon.css"></style>
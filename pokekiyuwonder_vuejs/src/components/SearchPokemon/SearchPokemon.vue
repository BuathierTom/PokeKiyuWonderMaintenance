<template>
    <BarreRecherche v-if="!hidden" @search="handleSearch"/>
    <ListePokemon :searchTerm="searchTerm"  @click-pokemon-profil-emit="clickPokemonProfilEmit()" @click-quit-pokemon-profil-emit="clickQuitPokemonProfilEmit()"/>
</template>

<script src="./SearchPokemon.js"></script>
<style src="./SearchPokemon.css"></style>
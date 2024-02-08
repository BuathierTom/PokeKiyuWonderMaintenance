<template>

    <!-- Bloc qui s'affiche quand on ne clique pas sur une CompartmentPokemon -->
    <div :class="{hidden : seletedPokemon != null}">

      <h1>Résultats de la recherche</h1>
  
      <!-- La liste de chaque CompartmentPokemon -->
      <div :class="{gridCasePokemon : seletedPokemon == null}">
          <CompartmentPokemon v-for="pokemon in filteredPokemons" :key="pokemon.id" :idPokemon="pokemon.id" :namePokemon="pokemon.name" :typesPokemon="pokemon.apiTypes" class="pokemonCaseDiv" @click="clickedPokemonProfil(pokemon), $emit('clickPokemonProfilEmit')"/>
      </div>

      <!-- Les deux boutons pour la pagination -->
      <div id="divButtonPage">
          <button type="button"
          @click="changePage(-1)" :disabled = "isFirstPage()">
              Previous
          </button>
          <p id="idTextPage">{{ getPage }}</p>
          <button @click="changePage(1)" :disabled = "isLastPage()">Suivant</button>
      </div>
    </div>

    <!-- Bloc qui s'affiche quand on clique sur une CompartmentPokemon -->
    <div id="idProfilePokemon" :class="{hidden : seletedPokemon == null}">
          <ProfilePokemon v-if="seletedPokemon" :pokemonData="seletedPokemon" @close = "closeProfilPokemon(), $emit('clickQuitPokemonProfilEmit')" @open-other-profil = "clickOtherProfil" @clickPokemon = "refreshPokemon"/>
    </div>
  </template>

<script src="./ListPokemon.js"></script>
<style src="./ListPokemon.css"></style>
<template>
    <div class="casePokemon">

        <!-- Le nom du Pokémon  -->
        <h3 id="namePokemon">{{ namePokemon }}</h3>

        <!-- L'image du Pokémon -->
        <img :src="'https:\/\/raw.githubusercontent.com\/PokeAPI\/sprites\/master\/sprites\/pokemon\/other\/official-artwork\/' + idPokemon + '.png'" id="imgPokemon">

        <!-- L'affichage des types du Pokémon -->
        <div class="typesPokemon"> 
          <div class="typePokemon" v-for="typePokemon in typesPokemon" :key="typePokemon.name">
            <p>{{ typePokemon.name }}</p>
            <img :src="typePokemon.image">
          </div>
        </div>
    </div>
</template>

<script src="./CompartmentPokemon.js"></script>
<style src="./CompartmentPokemon.css"></style>
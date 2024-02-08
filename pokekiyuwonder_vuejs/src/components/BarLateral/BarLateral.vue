<template>
  <div>
    <!-- Bouton en forme de pokeball permettant d'afficher le menu sur le côté droit de l'écran, le menu s'adapte par rapport à la position de celui-ci (s'il est 'activé' ou non) -->
    <button @click="slideMenu" :class="{ 'open-button-main': toggleMenu === 2, 'after-button-main': toggleMenu === 1}" class="before-button-main">
      <img class="pokeball-img" src="../../asset/pokeball.png">
    </button>

    <!-- Menu présent à l'écran uniquement lorsque la pokeball est cliqué. Il contient deux liens pour aller dans les autres pages -->
    <div class="main-container" :class="{ 'open-main': toggleMenu === 2}">
      <div class="div-center">
        <div>
          <router-link to="/"><img class="Motisma animate-button" src="../../asset/MotismaDex.gif"></router-link>
          <router-link to="/"><h1 id="h1_bar">Rechercher un pokémon</h1></router-link>
        </div>
        <div>
          <router-link to="/team"><h1 id="h1_bar">Team Pokémon</h1></router-link>
          <router-link to="/team"><img class="TeamRed animate-button" src="../../asset/TeamRed.gif"></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<!-- import des autres fichier de ce composant -->
<script src="./BarLateral.js"></script>
<style src="./BarLateral.css"></style>


<template>
    <div id="idProfilPokemon">

        <!-- Permet de quitter la page du pokemon -->
        <div id="crossProfilPokemon" @click="$emit('close')">
            <p>X</p>
        </div>


        <h2>{{ pokemonData.name }}</h2>

        <!-- Le block avec l'image du pokémon et les stats de celui ci -->
        <div class="block1">

            
            <img :src="pokemonData.image"/>

            <!-- Le tableau des stats -->
            <div id="idDivStats">

                <div class="classStat">
                    <p class="labelStat">HP</p>
                    <div class="jaugeStat" :style="{ backgroundColor: hp }">
                        <p>{{ pokemonData.stats.HP }}</p>
                    </div>
                </div>

                <div class="classStat">
                    <p class="labelStat">Attaque</p>
                    <div class="jaugeStat" :style="{ backgroundColor: attack }">
                        <p>{{ pokemonData.stats.attack }}</p>
                    </div>
                </div>

                <div class="classStat">
                    <p class="labelStat">Defense</p>
                    <div class="jaugeStat" :style="{ backgroundColor: defense }">
                        <p>{{ pokemonData.stats.defense }}</p>
                    </div>
                </div>

                <div class="classStat">
                    <p class="labelStat">Attaque Spécial</p>
                    <div class="jaugeStat" :style="{ backgroundColor: special_attack }">
                        <p>{{ pokemonData.stats.special_attack }}</p>
                    </div>
                </div>

                <div class="classStat">
                    <p class="labelStat">Defense Spécial</p>
                    <div class="jaugeStat" :style="{ backgroundColor: special_defense }">
                        <p>{{ pokemonData.stats.special_defense }}</p>
                    </div>
                </div>

                <div class="classStat">
                    <p class="labelStat">Vitesse</p>
                    <div class="jaugeStat" :style="{ backgroundColor: speed }">
                        <p>{{ pokemonData.stats.speed }}</p>
                    </div>
                </div>

            </div>
        </div>

        <!-- Le block 2 avec les resistance et le type du pokémon -->
        <div id="block2">

            <!-- Tablaeu de resistance -->
            <div id="idTableResistance">
                <div v-for="typeResistance in pokemonData.apiResistances" :key="typeResistance.name" class="divTypesResistance">
                    <p class="labelTypesResistance">{{ typeResistance.name }}</p>
                    <div class="divResistanceLabel" :style="{background : colorResistance(typeResistance.damage_multiplier)}">
                        <p class="resistanceLabel">{{ statResistance(typeResistance.damage_multiplier) }}</p>
                    </div>
                </div>
            </div>

            <!-- Type du Pokémon -->
            <div class="profilTypesPokemon"> 
                <div class="profilTypePokemon" v-for="typePokemon in pokemonData.apiTypes" :key="typePokemon.name">
                    <p>{{ typePokemon.name }}</p>
                    <img :src="typePokemon.image">
                </div>
            </div>

        </div>

        <!-- Le block 3 avec les évolutions et la pré évolution -->
        <div id="block3">

            <!-- La pre évolution -->
            <div id="preEvolutionDiv" v-if="pokemonData.apiPreEvolution != 'none'">
                <CompartmentPokemon :idPokemon="preEvolution.id" :namePokemon="preEvolution.name" :typesPokemon="preEvolution.apiTypes" class="pokemonCaseDivProdile" @click="$emit('openOtherProfil', preEvolution.id)"/>
            </div>

            <!-- Les évolutions -->
            <div id="evolutionDiv" v-if="pokemonData.apiEvolutions.length != 0">
                <CompartmentPokemon v-for="pokemon in evolution" :key="pokemon.id" :idPokemon="pokemon.id" :namePokemon="pokemon.name" :typesPokemon="pokemon.apiTypes" class="pokemonCaseDivProfile" @click="$emit('openOtherProfil', pokemon.id)"/>
            </div>

        </div>
        
        <!-- Le block des boutons pour ajouter ou retirer des équipes -->
        <div id="buttonTeam">

            <!-- L'équipe 1 -->
            <button v-if="isTeam('team1')" id="buttonAddTeam1" @click="addTeam('team1'), $emit('clickPokemon')">Ajouter a l'équipe 1</button>
            <button v-if="isTeam('team1')" id="buttonAddTeam1" @click="removeTeam('team1'), $emit('clickPokemon')">Retirer de l'équipe 1</button>
                
            <!-- L'équipe 2 -->
            <button v-if="isTeam('team2')" id="buttonAddTeam2" @click="addTeam('team2'), $emit('clickPokemon')">Ajouter a l'équipe 2</button>
            <button v-if="isTeam('team2')" id="buttonAddTeam1" @click="removeTeam('team2'), $emit('clickPokemon')">Retirer de l'équipe 2</button>
        </div>

    </div>
</template>

<script src="./ProfilePokemon.js"></script>
<style src="./ProfilePokemon.css"></style>
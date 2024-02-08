<template>
    <div>
      <table v-if="team === 'team1'" class="type-table">
        <thead>
          <th v-for="typ in types" :key="typ.id">
            <img :src="typ.image" class="img-type">
          </th>
        </thead>
        <tbody>
          <th v-for="typ in types" :key="typ.id" :style="{backgroundColor : colorResistance(teamResistance(team, typ.id))}">
            <div class="calculResistanceTypes">
              <p> {{ teamResistance(team, typ.id) }} </p>
            </div>
          </th>
        </tbody>
      </table>
      <table v-if="team === 'team2'" class="type-table">
        <thead>
          <th v-for="typ in types" :key="typ.id" :style="{backgroundColor : colorResistance(teamResistance(team, typ.id))}">
            <div class="calculResistanceTypes">
            <p> {{ teamResistance(team, typ.id) }}</p>
          </div>
          </th>
        </thead>
        <tbody>
          <th v-for="typ in types" :key="typ.id">
            <img :src="typ.image" class="img-type">
          </th>
        </tbody>
      </table>
    </div>
  </template>
  
  <script src="./TableType.js"></script>
  <style src="./TableType.css"></style>
  
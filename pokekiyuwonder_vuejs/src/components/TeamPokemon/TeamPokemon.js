export default {
  data() {
    return {
      team1: [],
      team2: [],
    };
  },
  props: {
    team: String,
  },
  mounted() {
    this.team1 = JSON.parse(localStorage.getItem("team1"));
    this.team2 = JSON.parse(localStorage.getItem("team2"));
  },


  methods: {
    generateRandomTeam() {
      // Générer une équipe aléatoire
      const randomTeam = JSON.parse(localStorage.getItem('listPokemon')).sort(() => 0.5 - Math.random()).slice(0, 6);
      console.log(randomTeam)
      
        // Mettre à jour l'équipe appropriée avec les Pokémon aléatoires
        if (this.team === 'team1') {
          localStorage.setItem("team1", JSON.stringify(randomTeam));
          location.reload();
        } else if (this.team === 'team2') {
          localStorage.setItem("team2", JSON.stringify(randomTeam));
          location.reload();

        }
    },
  }
};


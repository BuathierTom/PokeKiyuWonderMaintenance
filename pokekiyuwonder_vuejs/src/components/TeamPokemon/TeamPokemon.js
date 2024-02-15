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
    fillTeam() {
      // on recupere la team en cours
      let team = JSON.parse(localStorage.getItem(this.team));
      // on recupere tout les pokemons
      let listPokemon = JSON.parse(localStorage.getItem("listPokemon"));

      while (team.length < 6) {
        let random = Math.floor(Math.random() * listPokemon.length);
        team.push(listPokemon[random]);
      }
      localStorage.setItem(this.team, JSON.stringify(team));
      location.reload();

    }
  }
};
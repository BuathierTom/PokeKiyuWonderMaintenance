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
    fillTeam1() {
      // on recupere la team en cours
      let team1 = JSON.parse(localStorage.getItem(this.team));
      // on recupere tout les pokemons
      let listPokemon = JSON.parse(localStorage.getItem("listPokemon"));

      while (team1.length < 6) {
        let random = Math.floor(Math.random() * listPokemon.length);
        team1.push(listPokemon[random]);
      }
      localStorage.setItem(this.team, JSON.stringify(team1));
      location.reload();

    },

    fillTeam2() {
      // on recupere la team en cours
      let team2 = JSON.parse(localStorage.getItem(this.team));
      // on recupere tout les pokemons
      let listPokemon = JSON.parse(localStorage.getItem("listPokemon"));

      while (team2.length < 6) {
        let random = Math.floor(Math.random() * listPokemon.length);
        team2.push(listPokemon[random]);
      }
      localStorage.setItem(this.team, JSON.stringify(team2));
      location.reload();

    }
  }
};
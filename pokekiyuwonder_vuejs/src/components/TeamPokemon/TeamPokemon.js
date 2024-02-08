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
  }
};
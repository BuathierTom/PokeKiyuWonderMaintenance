import getTypeService from '../../services/getTypeService';

export default {
  data() {
    return {
      types: [],
    };
  },
  props: {
    team: String,
  },
  async mounted() {
    const allType = await getTypeService.getTypes();
    this.types = allType;
  },
  methods: {
    teamResistance(team, type){
      var total_res = 1

      var teamPokemon = JSON.parse(localStorage.getItem(team))

      for(var i in teamPokemon){
        total_res *= teamPokemon[i].apiResistances[type - 37].damage_multiplier
      }

      if (total_res < 1 && total_res != 0){
        total_res = this.calculateDivise(total_res);
      }

      return total_res 
    }, 
    calculateDivise(number){
      var number_count = 0;
      var result_function;
      while (number < 1.0 && number != 0){
        number = number * 2
        number_count = number_count + 1;
      }

      result_function = "1 /\n " + 2**number_count;

      return result_function;
    },
    colorResistance(valueResistance){
      if(valueResistance <= 0.5){
          return '#3d0';
      }
      else if(valueResistance < 1){
          return '#afa';
      }
      else if(valueResistance === 1){
          return '#eec';
      }
      else if(valueResistance <= 2){
          return '#f92';
      }
      else if(valueResistance > 2){
        return '#e66';
     }
      else{
          return '#3d3';
      }
  }
  }
};
import TableType from '../../components/TableType/TableType.vue';
import TeamPokemon from '../../components/TeamPokemon/TeamPokemon.vue';
import BarLateral from '../../components/BarLateral/BarLateral.vue';

export default {
    data() {
        return {
          searchTerm: '',
          team1: 'team1',
          team2: 'team2'
        };
      },
    components: {
        BarLateral,
        TableType,
        TeamPokemon
      },
};
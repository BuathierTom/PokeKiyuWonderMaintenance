export default {
  data() {
    return {
      toggleMenu: 0, // Permet de savoir si le menu est activé ou non
    };
  },
  methods: {
    // Cette méthode permet de changer l'état du menu pour pouvoir adapter l'ensemble du css
    slideMenu() {
      if (this.toggleMenu == 0 || this.toggleMenu == 1){
        this.toggleMenu = 2;
      } else {
        this.toggleMenu = 1;
      } 
    },
  },
};
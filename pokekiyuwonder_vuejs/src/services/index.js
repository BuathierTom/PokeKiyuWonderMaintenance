import { createRouter, createWebHistory } from 'vue-router'

import TeamPage from "../pages/TeamPage/TeamPage.vue"
import ResearchPokemon from '../pages/ResearchPokemon/ResearchPokemon.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: ResearchPokemon
    },
    {
      path : '/team',
      component: TeamPage
    }
  ]
})

export default router
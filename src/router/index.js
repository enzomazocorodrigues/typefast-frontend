import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Ranking from '../views/Ranking.vue'
import Salvos from '../views/Salvos.vue'
import Historico from '../views/Historico.vue'
import Trofeus from '../views/Trofeus.vue'
import GameRanking from '../views/GameRanking.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/historico',
    name: 'Historico',
    component: Historico
  },
  {
    path: '/ranking',
    name: 'Ranking',
    component: Ranking
  },
  {
    path: '/salvos',
    name: 'Salvos',
    component: Salvos
  },
  {
    path: '/trofeus',
    name: 'Trofeus',
    component: Trofeus
  },
  {
    path: '/game/:id',
    name: 'Game/:id',
    component: GameRanking
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

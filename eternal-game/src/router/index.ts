import { createRouter, createWebHistory } from 'vue-router'
import GameView from '@/views/GameView.vue'
import GameMap from '@/views/GameMap.vue'
import UnitData from '@/views/UnitData.vue'
import TroopData from '@/views/TroopData.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'game',
      component: GameView,
      children: [
        { path: 'game-map', component: GameMap},
        { path: 'unit-data', component: UnitData},
        { path: 'troop-data', component: TroopData},
      ]
    },
    {
      path: '/admin',
      name: 'admin',
      component: () => import('../views/AdminView.vue')
    }
  ]
})

export default router
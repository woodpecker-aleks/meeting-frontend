import { createRouter, createWebHistory } from 'vue-router'
import Home from '@pages/Home.vue'
import Register from '@pages/Register.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/register', component: Register },
  ],
})

export default router
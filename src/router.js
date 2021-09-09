import { createRouter, createWebHistory } from 'vue-router'
import Login from '@pages/Login.vue'
import Home from '@pages/Home.vue'
import Register from '@pages/Register.vue'

const router = createRouter({
  mode: 'history',
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ],
})

export default router

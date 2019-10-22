import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'
import Index from '../pages/Index.vue'
import About from '../pages/About.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/about',
    name: 'about',
    component: About
  }
]

const router = new VueRouter({
  routes
})

export default router

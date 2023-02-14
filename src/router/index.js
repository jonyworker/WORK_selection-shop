import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DetailView from '../views/DetailView.vue'
// import NavbarView from '../views/Navbar.vue'



const routes = [

  {
    path: '/',
    name: 'HomeView',
    component: HomeView
    // component: DetailView
  },
  {
    path: '/detail',
    name: 'DetailView',
    component: DetailView
  },
  // TODO: 製作巢狀 router with id
 
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

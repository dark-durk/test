import {createWebHistory,createRouter, Router} from 'vue-router'
import routes from './routes'

const router:Router=createRouter({
  history:createWebHistory(),
  routes
})

export default router
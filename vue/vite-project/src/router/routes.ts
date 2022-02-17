import { RouteRecordRaw } from 'vue-router'

const routes:Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: ()=>import('../pages/Home.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: ()=>import('../pages/About.vue')
  }
]
export default routes

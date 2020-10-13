import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Desk from '../components/home/desk.vue'
export default new Router({
  routes: [
    {
      path: '/',
      name: 'Desk',
      component: Desk
    }
  ]
})

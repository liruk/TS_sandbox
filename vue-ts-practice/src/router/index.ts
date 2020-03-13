import Vue from 'vue'
import VueRouter from 'vue-router'
import BCDiceTest from '../views/BCDiceTest.vue';

Vue.use(VueRouter)

const routes = [
  {
      path: '/',
      name: 'bcdice',
      component: BCDiceTest,
      alias: '/bcdice'
  }
];

const router = new VueRouter({
  routes
})

export default router

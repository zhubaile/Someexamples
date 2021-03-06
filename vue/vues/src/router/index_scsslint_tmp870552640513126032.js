import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// import Zbl from '@/components/Zbl'

const Zbl = () => import('../components/Header.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aaaa',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/zbl',
      name: 'Zbl',
      component: Zbl
    }
  ]
})

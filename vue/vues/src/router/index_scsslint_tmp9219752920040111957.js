import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const Header = () => import('../components/Header.vue')

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/aaaa',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    }
  ]
})

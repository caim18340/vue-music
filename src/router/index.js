import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'
// eslint-disable-next-line no-unused-vars
import Index from '@/views/index/index'
import Menu from '@/views/index/children/Menu'
import My from '@/views/index/children/My'
import Find from '@/views/index/children/Find'
import Mv from '@/views/index/children/Mv'
import Search from '@/views/index/children/Search'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: {name: 'Index'}
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      redirect: {name: 'Find'},
      children: [
        {
          path: '/index/menu',
          name: 'Menu',
          component: Menu
        },
        {
          path: '/index/my',
          name: 'My',
          component: My
        },
        {
          path: '/index/find',
          name: 'Find',
          component: Find
        },
        {
          path: '/index/mv',
          name: 'Mv',
          component: Mv
        },
        {
          path: '/index/search',
          name: 'Search',
          component: Search
        }
      ]
    }
  ]
})

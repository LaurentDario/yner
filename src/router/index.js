import Vue from 'vue'
import Router from 'vue-router'
import Feed from '@/components/Feed'
import Themes from '@/components/ynes/Themes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Feed',
      component: Feed
    },
    {
      path: '/create',
      name: 'Themes',
      component: Themes
    }
  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list/list'
import newStaff from '@/components/newStaff/newStaff'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'list',
      component: list
    },
    {
      path: '/newStaff',
      name: 'newStaff',
      component: newStaff
    }
  ]
})

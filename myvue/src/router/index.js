import Vue from 'vue'
import Router from 'vue-router'
import newStaff from '@/components/newStaff/newStaff'
import list from '@/components/list/list'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/newStaff',
      name: 'newStaff',
      component: newStaff
    },
    {
      path: '/list',
      name: 'list',
      component: list
    }


  ]
})

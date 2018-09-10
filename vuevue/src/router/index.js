import Vue from 'vue'
import Router from 'vue-router'
import list from '@/components/list/list'
import newStaff from '@/components/newStaff/newStaff'
import main from '@/components/main/main'
import login from '@/components/login/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: login,
    },
    {
      path: '/main',
      component: main,
      children:[
        {path: '', component: list},
        {path: 'newStaff', component: newStaff}
      ]
    },

  ]
})

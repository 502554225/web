// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import App from './App'
import router from './router'
import creatStore from './store/store'
import './css/common.css'
import './css/new.css'
import './css/ms.css'
import './css/reset.css'
import './css/bt.css'
import Vue from 'vue'
import Vuex from 'vuex'
import resource from 'vue-resource'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(resource)
const store=creatStore()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

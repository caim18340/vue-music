/* eslint-disable import/first */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
Vue.prototype.$http = axios
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
import './assets/js/muse'
Vue.use(MuseUI)
Vue.config.productionTip = false
import store from './store'
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

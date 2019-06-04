import Vue from 'vue'
import Vuex from 'vuex'
import music from './module'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    music
  }
})
export default store

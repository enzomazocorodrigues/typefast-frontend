import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseApiUrl: 'http://localhost:3000'
  },
  getters: {
    getBaseApiUrl: state => () => {
      return state.baseApiUrl
    }
  },
  mutations: {
    
  },
  actions: {
  },
  modules: {
  }
})

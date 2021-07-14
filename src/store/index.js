import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    baseApiUrl: window.location.includes('localhost') ? 'http://localhost:3000' : 'https://typefast-backend.herokuapp.com'
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

import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: 'http://localhost:3000',
    events: Array,
    show: {
      showMenu: false
    }
  },
  mutations: {
    displayEvents(state, data) {
      state.events = data
    }
  },
  actions: {
    async fetchEventsFromBackend(ctx) {
      let data = await ax.get(`${ctx.state.apiUrl}/events`)
      ctx.commit('displayEvents', data.data)
    }
  },
  modules: {
  }
})

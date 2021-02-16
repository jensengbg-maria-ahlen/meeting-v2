import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
      let data = await ax.get(`/events`)
      ctx.commit('displayEvents', data.data.events)
    }
  },
  modules: {
  }
})

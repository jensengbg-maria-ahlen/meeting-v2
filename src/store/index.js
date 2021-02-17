import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    events: Array,
    show: {
      showMenu: false
    },
    filteredEvents: Array,
    filter: ''
  },

  mutations: {
    displayEvents(state, data) {
      state.events = data
    },

    displayFilterSearch(state, data) {
      state.filteredEvents = data
    }
  },

  actions: {
    async fetchEventsFromBackend(ctx) {
      let data = await ax.get(`/events`)
      ctx.commit('displayEvents', data.data.events)
    },

    async filterSearch(ctx, search) {
      await ctx.commit('setFilterSearch', search)
      ctx.dispatch('searchFilter')
    }
  },

  modules: {
  }
})

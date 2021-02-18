import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: "https://api.jsonbin.io/b/602e22e00665b21b00b95609",
    apiKey: "$2b$10$ufc9BTMG9.G3h7KQTN16h.ajL/VlR6u4PovfkP4ZjpLsao1S8ZMQC",
    events: Array,
    show: {
      showMenu: false,
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
    },

    toggleMenu(state) {
      state.show.showMenu = !state.show.showMenu
    }
  },

  actions: {
    async fetchEventsFromBackend(ctx) {
      let data = await ax.get(`${ctx.state.apiUrl}`)
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

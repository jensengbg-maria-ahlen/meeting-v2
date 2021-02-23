import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: "https://api.jsonbin.io/b/6032e0960866664b1080ca26",
    events: Array,
    allEventsWithComments: Array,
    show: {
      showMenu: false,
      showWelcome: false
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
    },

    showWelcome(state) {
      state.show.showWelcome = !state.show.showWelcome
    }
  },

  actions: {
    async fetchEventsFromBackend(ctx) {
      let data = await ax.get(`${ctx.state.apiUrl}`)
      ctx.commit('displayEvents', data.data.events)
    },

    async postCommentToBackend(ctx,) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "version": "latest"
        }
      }

      try {
        let data = await ax.put(`${ctx.state.apiUrl}`, {
          events: ctx.state.events,
        }, 
        options)
        ctx.commit('displayEvents', data.data.events)
      } catch (error) {
        console.log('error: ', error)
      }
    },

    async filterSearch(ctx, search) {
      await ctx.commit('setFilterSearch', search)
      ctx.dispatch('searchFilter')
    }
  },

  modules: {
  }
})

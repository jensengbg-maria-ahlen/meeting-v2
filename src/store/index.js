import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    apiUrl: "https://api.jsonbin.io/b/602fc6cdbd6b755d0199c0ad",
    apiKey: '$2b$10$NNSfRdEe8UkN./ILcBB0LeAJNl//tf8.r2LEOlpimaXAFBjfFE1Lu',
    events: Array,
    reviews: Array,
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

    async postCommentToBackend(ctx, value) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "secret-key": ctx.state.apiKey
        }
      }
      try {
        let data = await ax.post(`${ctx.state.apiUrl}`, {
          events: ctx.state.events,
          reviews: value
        }, options)
        console.log('data', data)
      } catch (error) {
        console.log(error)
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

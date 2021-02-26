import Vue from 'vue'
import Vuex from 'vuex'
import ax from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({

  state: {
    apiUrl: "https://api.jsonbin.io/v3/b/6038d3bc0866664b1083ba00",
    apiKey: "$2b$10$DQabN5NhCvGHt9M5C5daz.GVexA/izze7N4i2qBeHNFyCa7lnWTmC",
    events: {
      type: Array,
      default: []
    },
    showMenu: true,
    filteredEvents: Array,
    filter: {
      search: ''
    }
  },


  mutations: {
    displayEvents(state, data) {
      state.events = data
    },

    setFilterEvents(state, data) {
      state.filteredEvents = data
      state.filter.search = data
    },

    toggleMenu(state) {
      state.showMenu = !state.showMenu
    }
  },


  actions: {
    async fetchEventsFromBackend(ctx) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey,
          "X-Bin-Versioning": "false"
        }
      }
      let data = await ax.get(`${ctx.state.apiUrl}`, options)
      ctx.commit('displayEvents', data.data.record.events)
    },

    async postCommentToBackend(ctx) {
      let options = {
        headers: {
          "Content-Type": "application/json",
          "X-Master-Key": ctx.state.apiKey,
          "X-Bin-Versioning": "false"
        }
      }
      try {
        let data = await ax.put(`${ctx.state.apiUrl}`, {
          events: ctx.state.events,
        },
          options)
        ctx.commit('displayEvents', data.data.record.events)
      } catch (error) {
        console.log('error: ', error)
      }
    },

    async filterEvents(ctx, search) {
      await ctx.commit('setFilterEvents', search)
      ctx.dispatch['searchFilter']
    },
  },


  getters: {
    chosenEvent(state) {
      return (eventId) => {
        if(state.events.find) {
          let eventChosen = state.events.find((event) => event.id == eventId)
          return eventChosen
        } else {
          return {}
        } 
      }
    },

    searchFilter(ctx) {
      if (
        ctx.filter.search == "" ||
        ctx.filter.search === undefined ||
        ctx.filter.search === null) {
        ctx.filteredEvents = ctx.events
      } else {
        ctx.filteredEvents = ctx.events.filter((event) => {
          let titleSearch = event.title.toLowerCase().includes(ctx.filter.search.toLowerCase());
          let organizerSearch = event.organizer.toLowerCase().includes(ctx.filter.search.toLowerCase());
          return titleSearch + organizerSearch
        })
      }
      return ctx.filteredEvents
    }
  }

})
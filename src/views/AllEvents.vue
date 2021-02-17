<template>
  <div id="allEvents">
    <h1>This is all the events</h1>
    <input type="text" placeholder="Search for event" v-model="search" @input="filter()">

    <div v-if="!filteredList || !filteredList.length">
      <h2>No events available with your search</h2>
    </div>

    <div v-else>
      <Event v-for="event in filteredList" :key="event.id" :event="event" />
    </div>
  </div>
</template>

<script>
import Event from '@/components/Event'
export default {
  name: 'AllEvents',
  components: {
    Event
  },
  props: {
    events: Array
  },
  data: () => ({
    search: "",
    filteredList: Array
  }),
  methods: {
    filter() {
      if ( this.search == 'undefined' || this.search == null || this.search == '' ) {
        this.filteredList = this.events
      } else {
        this.filteredList = this.events.filter((event) => {
          let titleSearch = event.title.toLowerCase().includes(this.search.toLowerCase())
          let organizerSearch = event.organizer.toLowerCase().includes(this.search.toLowerCase())
          let dateSearch = event.when.toLowerCase().includes(this.search.toLowerCase())
          
          return (titleSearch, organizerSearch, dateSearch)
        })
      }
    }
  },
  beforeMount() {
    this.filter();
  },
}
</script>

<style>

</style>

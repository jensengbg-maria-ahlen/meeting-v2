<template>
  <div id="app">
    <header>
      <Menu v-if="showMenu" />
    </header>
    <router-view :events="allEvents"/>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    Menu
  },
  computed: {
    showMenu() {
      return !this.$store.state.show.showMenu
    },
    allEvents() {
      return this.$store.state.events
    },

  },
  beforeMount() {
    this.$store.dispatch("fetchEventsFromBackend")
  }
}
</script>

<style>

</style>

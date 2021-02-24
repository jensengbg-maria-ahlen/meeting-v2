<template>
  <div id="app">
    <div id="menuItem" >
      <Menu v-if="showMenu" />
    </div>
    <router-view :events="allEvents" />
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  name: 'App',
  components: {
    Menu
  },
  computed:{
    showMenu() {
      return !this.$store.state.showMenu
    },
    allEvents() {
      return this.$store.state.events
    }
  },
  beforeMount() {
    this.$store.dispatch("fetchEventsFromBackend")
  }
}
</script>

<style>
#app {
    max-width: 100vw;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }
  
#menuItem {
        width: 100%;
        display: flex;
        justify-content: flex-end;
    }
</style>

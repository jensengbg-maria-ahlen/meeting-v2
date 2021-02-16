<template>
  <div id="app">
    <header>
      <Menu v-if="showMenu" />
    </header>
    <router-view />
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
    }
  },
  beforeMount() {
    this.$store.dispatch("fetchEventsFromBackend")
  }
}
</script>

<style>

</style>

<template>
  <div id="app">
    <div id="menuItem">
      <Menu v-if="showMenu" />
    </div>
    <router-view />
  </div>
</template>

<script>
import Menu from "@/components/Menu";
export default {
  name: "App",
  components: {
    Menu,
  },
  computed: {
    showMenu() {
      return !this.$store.state.showMenu;
    },
  },
  beforeMount() {
    this.$store.dispatch("fetchEventsFromBackend");
  },
};
</script>

<style>
#app {
  max-width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  font-family: "Open Sans", sans-serif;
  margin: 1em;
}

#menuItem {
  width: 100%;
  display: flex;
  justify-content: flex-end;
}
</style>

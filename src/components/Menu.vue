<template>
  <section>
    <nav>
      <a href="#" @click="goTo('/allevents')"> All our events </a>
      <a href="#" @click="goTo('/about')" > About </a>
      <a href="#" @click="goTo('/login')"> Login </a>
    </nav>
  </section>
</template>

<script>
export default {
  name: "Menu",
  methods: {
    goTo(route) {
      if (route !== this.$route.path) {
        this.$router.push(route);
      }
      this.$store.commit('toggleMenu')
    },
  },
};
</script>

<style scoped>
section {
  background: #1f1f1f;
  width: 300px;
  height: 500px;
  position: fixed;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 5em 2em 0 0;
  padding: 1em;
}

div img {
  margin: 1rem;
}

nav {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
}

a {
  font-weight: bold;
  font-size: 32px;
  color: #FFFFFF;
  text-decoration: none;
  margin: 1rem;
  text-align: right;
}
</style>

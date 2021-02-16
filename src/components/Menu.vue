<template>
  <section>
    <nav>
      <a href="#" @click="goTo('/allEvents')"> All our events </a>
      <a href="#" @click="goTo('/about')"> About </a>
      <a href="#" @click="goTo('/login')"> Login </a>
      <a href="#" @click="goTo('/signup')"> Sign up </a>
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
    },
  },
};
</script>

<style>
</style>

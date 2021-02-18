<template>
  <main class="home">
    <header>
      <h1>MEETUP</h1>
    </header>
  </main>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    setTimeout(() => {
      this.$router.replace("/allevents");
    }, 4000);
  },
};
</script>

<style scoped>
header {
  background-image: url('https://images.unsplash.com/photo-1523908511403-7fc7b25592f4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80');
  background-size: cover;
  height: 60vw;
}

h1 {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3em;
  text-shadow: 3px 3px 3px black;
}
</style>

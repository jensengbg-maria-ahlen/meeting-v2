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
  background-image: url(./../assets/meeting-background.jpg);
  background-size: cover;
  height: 40vw;
}

h1 {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
  text-shadow: 3px 3px 3px black;
}
</style>

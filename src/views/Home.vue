<template>
  <div class="home">
    <h1>MEETUP</h1>
  </div>
</template>

<script>
export default {
  name: "Home",
  mounted() {
    setTimeout( () => {
      this.$router.replace("/allevents");
    }, 2000);
  },
};
</script>

<style>
 .home {
   background: rgba(85, 149, 214, 0.521);
 }
</style>

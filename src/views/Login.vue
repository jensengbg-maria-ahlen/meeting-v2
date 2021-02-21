<template>
  <div id="login">
    <nav>
      <div class="icons">
        <img src="./../assets/m-icon.svg" alt="navIcon" />
        <img src="./../assets/menu.svg" alt="menuIcon" @click="toggleMenu" class="menuIcon" />
      </div>
    </nav>

    <section>
      <h1>Log in</h1>
      <div>
        <p>Not registered with us yet?</p>
        <p>Sign up here</p>
      </div>
      <label>Email address:</label>
      <input type="text">
      <label>Password:</label>
      <input type="text">
    </section>
    

    <footer>
      <p>Contact us</p>
      <img src="./../assets/facebook.svg" alt="facebook" />
      <img src="./../assets/twitter.svg" alt="twitter" />
      <img src="./../assets/instagram.svg" alt="instagram" />
      <img src="./../assets/chat.svg" alt="chat" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Login",
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
};
</script>

<style>
.icons {
  display: flex;
  justify-content: space-between;
}

nav {
  margin: 0 1em 0.5em 1em;
}

nav img {
  width: 4em;
  height: 4em;
}

footer img {
  width: 3em;
  height: 3em;
  margin: 2em;
}
</style>

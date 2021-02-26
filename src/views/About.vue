<template>
  <main class="about">
    <nav>
      <div class="icons">
        <img src="./../assets/m-icon.svg" alt="navIcon" @click="goHome('/allevents')" />
        <img src="./../assets/menu.svg" alt="menuIcon" @click="toggleMenu" class="menuIcon" />
      </div>
    </nav>

    <h1>About the creator of Meetups</h1>
    <h2>The woman who created Meetups was Maria Åhlén</h2>
    <p> <strong>
      She made this webbpage when se was going i college on Jensens Yrkeshögskola.
      <br />
      The webbpage is created on Vue version 2 and Vuex. It has VueRouter and HTTP-server installed for it to work online with Docker and on Heroku, which is a cloud based platform where you can upload your apps quickly.   
      <br />
       <br />
      <a href="https://signup.heroku.com/">HERE</a> you can find more information about Heroku. </strong>
    </p>
    <h3>
      If you want to look at the source code for this project, please click <a href="https://github.com/jensengbg-maria-ahlen/meetup">HERE</a>
    </h3>

    <footer>
      <p>Contact us</p>
      <img src="./../assets/facebook.svg" alt="facebook" />
      <img src="./../assets/twitter.svg" alt="twitter" />
      <img src="./../assets/instagram.svg" alt="instagram" />
      <img src="./../assets/chat.svg" alt="chat" />
    </footer>
  </main>
</template>

<script>
export default {
  name: "About",
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    goHome(route) {
      this.$router.push(route);
    }
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
  cursor: pointer;
}

a {
  text-decoration: none;
  color: rgb(102, 2, 102);
  font-size: larger;
}

footer img {
  width: 3em;
  height: 3em;
  margin: 2em;
}
</style>

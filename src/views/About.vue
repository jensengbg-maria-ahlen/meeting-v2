<template>
  <main class="about">
    <nav>
      <div class="icons">
        <img src="./../assets/m-icon.svg" alt="navIcon" />
        <img src="./../assets/menu.svg" alt="menuIcon" @click="toggleMenu" />
      </div>
    </nav>

    <h1>About us</h1>
    <h2>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore numquam
      odit quos optio doloremque nulla ea error sequi excepturi tempore illo,
      provident possimus veniam corrupti sint velit in maiores dicta.
      <br />
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
      quasi itaque dicta voluptatem, debitis ipsam error corporis similique!
      Blanditiis optio rerum recusandae est, a voluptatem explicabo maxime
      reprehenderit labore et?
      <br />
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae
      molestias quae, nostrum quia laborum necessitatibus nam eveniet harum
      amet. Cumque vero, nam praesentium voluptate aliquid soluta sequi
      cupiditate laborum incidunt.
    </p>
    <h3>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut inventore
      rerum porro doloremque, fugiat, minus tenetur nostrum fuga voluptatem
      quasi, officiis nobis odit totam nihil officia sed autem in quibusdam.
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

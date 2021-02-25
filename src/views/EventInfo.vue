<template>
  <main id="eventInfo">
    <nav>
      <div class="icons">
        <img src="./../assets/m-icon.svg" alt="navIcon" />
        <img src="./../assets/menu.svg" alt="menuIcon" @click="toggleMenu" class="menuIcon" />
      </div>
    </nav>

    <section class="meetupInfo">
      <h1>{{ event.title || 'No title available'}}</h1>
      <img :src="event.imgUrl || 'https://images.unsplash.com/photo-1594322436404-5a0526db4d13?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1315&q=80'" alt="bild" />
      <h2>{{ event.description || 'No description available'}}</h2>
      <h3>When: {{ event.when || 'No date available'}}</h3>
      <h3>Organizer: {{ event.organizer || 'No organizer available'}}</h3>
    </section>

    <Signup :event="event" />
    <Comments v-for="review of event.reviews" :key="review.name" :review="review" />

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
import Signup from './../components/Signup'
import Comments from './../components/Comments'
export default {
  name: 'EventInfo',
  components: {
    Signup, 
    Comments
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
  computed: {
    event() {
      return this.$store.getters.chosenEvent(this.$route.params.id)
    },
  },
};
</script>

<style scoped>
#eventInfo {
  display: flex;
  flex-direction: column;
}

.meetupInfo {
  margin: 15px;
  padding: 1rem;
  border: 1px solid rgba(15, 15, 15, 0.329);
  background-color: #c9c9c750;
  box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
  float: left;
  width: 50em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

img {
  max-width: 70%;
  max-height: 70%;
}

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
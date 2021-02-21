<template>
  <main id="eventInfo">
    <nav>
      <div class="icons">
        <img src="./../assets/m-icon.svg" alt="navIcon" />
        <img src="./../assets/menu.svg" alt="menuIcon" @click="toggleMenu" class="menuIcon" />
      </div>
    </nav>

    <section class="meetupInfo">
      <h1>{{ event.title }}</h1>
      <img :src="event.imgUrl" alt="bild" />
      <h2>{{ event.description }}</h2>
      <h3>When: {{ event.when }}</h3>
      <h3>Organizer: {{ event.organizer }}</h3>
    </section>

    <Signup :event="event" />
    <Comments v-for="review of event.reviews" :key="review.id" :review="review" />

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
  components: {
    Signup, 
    Comments
  },
  props: {
    events: Array,
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
  },
  computed: {
    event() {
      let eventInfo = {
        title: this.chosenEvent ? this.chosenEvent.title : "No title available",
        imgUrl: this.chosenEvent ? this.chosenEvent.imgUrl : "No image available",
        description: this.chosenEvent ? this.chosenEvent.description : "No description available",
        when: this.chosenEvent ? this.chosenEvent.when : "No date available",
        organizer: this.chosenEvent ? this.chosenEvent.organizer : "No organizer available",
        status: this.chosenEvent ? this.chosenEvent.status : "no status available",
        reviews: this.chosenEvent ? this.chosenEvent.reviews: "no comments available"
      };
      return eventInfo;
    },
    chosenEvent() {
      if (this.$route !== undefined) {
        return this.events.find((event) => event.id == this.$route.params.id);
      } else {
        return this.eventInfo;
      }
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
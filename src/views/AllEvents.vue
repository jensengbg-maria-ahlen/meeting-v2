<template>
  <main id="allEvents">
    <nav>
      <div class="icons">
        <img src="./../assets/m-icon.svg" alt="navIcon" />
        <img src="./../assets/menu.svg" alt="menuIcon" @click="toggleMenu" class="menuIcon" />
      </div>
    </nav>

    <section>
      <input type="text" placeholder="Search for meetup" v-model="search" @input="filter()" />
      <div v-if="!searchFilter || !searchFilter.length">
        <h2>No meetups available</h2>
      </div>
      <div class="displayAllEvents" v-else>
        <div>
          <h1>Upcoming events</h1>
          <Event v-for="event in searchFilter" :key="event.id" :event="event" v-show="event.status === 'new'" />
        </div>
        <div>
          <h1>Ongoing events</h1>
          <Event v-for="event in searchFilter" :key="event.id" :event="event" v-show="event.status === 'ongoing'" />
        </div>
        <div>
          <h1>Previous events</h1>
          <Event v-for="event in searchFilter" :key="event.id" :event="event" v-show="event.status === 'old'" />
        </div>  
      </div>
    </section>

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
import Event from "@/components/Event";

export default {
  name: "AllEvents",
  components: {
    Event
  },
  data: () => ({
    search: ""
  }),
  computed: {
    searchFilter() {
      return this.$store.getters['searchFilter']
    }
  },
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    filter() {
      this.$store.dispatch("filterEvents", this.search)
    },
  },
};
</script>

<style>
#allEvents {
  display: flex;
  flex-direction: column;
}

.displayAllEvents {
  display: flex;
  flex-direction: column;
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
  cursor: pointer;
}

input {
  padding: 1rem;
  color: rgba(0, 0, 0, 0.842);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
  display: flex;
  border-radius: 5px;
  font-size: 20px;
  width: 90%;
}

button {
  width: 184px;
  height: 55px;
  background: #ffffff;
  border-radius: 50px;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 2em;
  cursor: pointer;
}

footer p {
  margin: 1em;
}
footer img {
  width: 3em;
  height: 3em;
  margin: 2em;
}
</style>

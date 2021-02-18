<template>
  <main id="allEvents">
    <nav>
      <div class="icons">
        <img src="./../assets/m-icon.svg" alt="navIcon" />
        <img src="./../assets/menu.svg" alt="menuIcon" @click="toggleMenu" />
      </div>
    </nav>

    <section>
      <input
        type="text"
        placeholder="Sök efter meetup"
        v-model="search"
        @input="filter()"
      />
      <div v-if="!filteredList || !filteredList.length">
        <h2>Inga meetup tillgängliga med din sökning</h2>
      </div>
      <div class="displayAllEvents" v-else>
        <div>
          <h1>Kommande events</h1>
          <Event v-for="event in filteredList" :key="event.id" :event="event" v-show="event.status === 'new'" />
        </div>
        <div>
          <h1>Pågående events</h1>
          <Event v-for="event in filteredList" :key="event.id" :event="event" v-show="event.status === 'ongoing'" />
        </div>
        <div>
          <h1>Tidigare events</h1>
          <Event v-for="event in filteredList" :key="event.id" :event="event" v-show="event.status === 'old'" />
        </div>
        
      </div>
    </section>

    <footer>
      <p>Kontakta oss</p>
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
  props: {
    events: Array,
  },
  data: () => ({
    search: "",
    filteredList: Array,
  }),
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },

    filter() {
      if (
        this.search == "undefined" ||
        this.search == null ||
        this.search == ""
      ) {
        this.filteredList = this.events;
      } else {
        this.filteredList = this.events.filter((event) => {
          let titleSearch = event.title.toLowerCase().includes(this.search.toLowerCase());
          let organizerSearch = event.organizer.toLowerCase().includes(this.search.toLowerCase());
          let dateSearch = event.when.toLowerCase().includes(this.search.toLowerCase());
          return titleSearch + organizerSearch + dateSearch;
        });
      }
    },
  },
  beforeMount() {
    this.filter();
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

footer img {
  width: 3em;
  height: 3em;
  margin: 2em;
}
</style>

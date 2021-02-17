<template>
  <section>
    <h1>{{ event.title }}</h1>
    <img :src="event.imgUrl" alt="bild" />
    <h2>{{ event.description }}</h2>
    <h3>Datum: {{ event.when }}</h3>
    <h3>Arrangör: {{ event.organizer }}</h3>
  </section>
</template>

<script>
export default {
  props: {
    events: Array,
  },
  computed: {
    event() {
      let eventInfo = {
        title: this.chosenEvent ? this.chosenEvent.title : "no title available",
        imgUrl: this.chosenEvent ? this.chosenEvent.imgUrl : "No image available",
        description: this.chosenEvent ? this.chosenEvent.description : "No description available",
        when: this.chosenEvent ?  this.chosenEvent.when : "No date available",
        organizer: this.chosenEvent ? this.chosenEvent.organizer :  "No organizer available",
        status: this.chosenEvent ? this.chosenEvent.status : "no status available",
      };
      return eventInfo;
    },
    chosenEvent() {
      if (this.$route !== undefined) {
        return this.events.find((event) => event.id == this.$route.params.id);
      } else {
        return null;
      }
    },
  },
};
</script>

<style scoped>

img {
    max-width: 70%;
    max-height: 70%;
}

</style>
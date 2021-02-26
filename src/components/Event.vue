<template>
  <section class="event">
    <h2 class="title">{{ event.title }}</h2>
    <h3>When: {{ event.when }}</h3>
    <h3>Organizer: {{ event.organizer }}</h3>
    <div v-if="event.status === 'old'">
      <button @click="showInfo(event.id)">What did you think</button>
    </div>
    <div v-else>
      <button @click="showInfo(event.id)">More info</button>
    </div>
    
  </section>
</template>

<script>
export default {
  name: 'event',
  props: {
    event: Object,
  },
  methods: {
    showInfo(id) {
      this.$router.push(`/eventinfo/${id}`);
    },
  },
};
</script>

<style>
.event {
  margin: 15px;
  padding: 1rem;
  border: 1px solid rgba(15, 15, 15, 0.329);
  background-color: #c9c9c750;
  box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
  float: left;
  width: 40%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}


button {
  width: 20%;
  height: 20%;
  background: #ffffff;
  border: 1px solid rgba(15, 15, 15, 0.329);
  border-radius: 50px;
  box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
  font-family: 'Open Sans', sans-serif;
  font-weight: bolder;
  font-size: medium;
  cursor: pointer;
}
</style>

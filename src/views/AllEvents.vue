<template>
  <div id="allEvents">
    <h1>This is allEvent</h1>
    <Event v-for="event in displayEvents" :key="event.id" :event="event" />
  </div>
</template>

<script>
import Event from '@/components/Event'
export default {
  name: 'AllEvents',
  components: {
    Event
  },
  computed: {
    displayEvents() {
      return this.$store.state.events
    }
  }
}
</script>

<style>

</style>
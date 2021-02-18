<template>
  <section>
      <div v-show="event.status !== 'old'">
        <h2>Vi vill gärna se dig på denna meetup</h2>
        <input type="text" placeholder="Namn">
        <input type="text" placeholder="Epost">
        <button>Anmälan</button>
      </div>

      <div v-show="event.status === 'old'">
        <h2>Berätta gärna vad du tyckte om denna meetup</h2>
        <input type="text" placeholder="Namn">
        <input type="text" placeholder="Epost">
        <textarea name="" id="" cols="100" rows="20"></textarea>
        <button>Skicka in</button>

        <h2>Recentioner</h2>
      </div>
    </section>
</template>

<script>
export default {
    props: {
        event: Object
    }
}
</script>

<style>

</style>
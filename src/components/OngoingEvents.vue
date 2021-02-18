<template>
    <section class="event">
        <h2 class="title">{{event.title}}</h2>
        <img :src="event.imgUrl" alt="bild">
        <h3>Datum: {{event.when}}</h3>
        <h3>Arrangör: {{event.organizer}}</h3>
        <button @click="showInfo(event.id)"> Mer info </button>
    </section>
</template>

<script>
export default {
    props: {
        event: Object
    },
    methods: {
        showInfo(id) {
            this.$router.push(`/eventinfo/${id}`)
        }
    }
}
</script>

<style>

</style>

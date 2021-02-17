<template>
    <div class="event">
        <h2 class="title">{{event.title}}</h2>
        <img :src="event.imgUrl" alt="bild">
        <h3>Datum: {{event.when}}</h3>
        <h3>Arrangör: {{event.organizer}}</h3>
        <button @click="showInfo(event.id)"> Mer info </button>
    </div>
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
    .event {
        margin: 15px;
        padding: 1rem;
        border: 1px solid rgba(15, 15, 15, 0.329);
        background-color: #c9c9c750;
        box-shadow: 0 0 7px rgba(43, 41, 41, 0.623);
        float: left;
        width: 420px;
    }

    .event img {
        width: 400px;
        height: 260px;
    }

</style>

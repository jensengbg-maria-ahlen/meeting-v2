<template>
    <div class="event">
        <h3 class="title">{{event.title}}</h3>
        <img :src="event.imgUrl" alt="bild">
        <h3>Datum: {{event.when}}</h3>
        <h3>Arrangör: {{event.organizer}}</h3>
        <button @click="showInfo"> Mer info</button>
    </div>
</template>

<script>
export default {
    props: {
        event: Object
    },
    methods: {
        goTo() {
            console.log('Hej')
        },
        showInfo() {
            console.log('merInfo')
        }
    }
}
</script>

<style>
    .event {
        border: 1px solid black;
    }

    .event img {
        width: 400px;
        height: 260px;
    }

</style>

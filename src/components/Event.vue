<template>
    <div class="event" @click="goTo">
        <h3 class="title">{{event.title}}</h3>
        <img :src="event.imgUrl" alt="bild">
        <h3>{{event.when}}</h3>
        <h3>{{event.organizer}}</h3>
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

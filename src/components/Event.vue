<template>
    <div class="event">
        <h3 class="title">{{event.title}}</h3>
        <h3>{{event.when}}</h3>
        <h3>{{event.organizer}}</h3>
    </div>
</template>

<script>
export default {
    props: {
        event: Object
    }
}
</script>

<style>
    .event {
        border: 1px solid black;
    }

</style>
<template>
  <section class="commentSection">
    <h3>By: {{comments.name}}</h3>
    <h4>{{comments.comment}}</h4>
  </section>
</template>

<script>
export default {
  name: 'Comments',
  props: {
    review: Object
  },
  computed: {
    comments() {
      let comment = {
        name: this.review.name,
        email: this.review.email,
        comment: this.review.comment
      }
      return comment
    }
  }
}
</script>

<style>
  .commentSection {
    display: flex;
    flex-direction: column;
    margin: 1em;
    padding: 1em;
    border: 3px solid #575757;
  }
</style>
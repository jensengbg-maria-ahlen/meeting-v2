<template>
  <section>
    <div v-show="event.status !== 'old'">
      <h2>We would love you to join us on this meetup</h2>
      <input type="text" placeholder="name" v-model="inputValue.name" />
      <input type="text" placeholder="email" v-model="inputValue.email" />
      <button @click="apply()" class="applyButton">Apply</button>
      <h2 v-if="showWelcome" class="welcomeText">
        Welcome {{ inputValue.name }} to the event. A confirmation with more
        details has been sent to your email
      </h2>
    </div>

    <div v-show="event.status === 'old'">
      <h2>Please tell us your thoughts about this meetup</h2>
      <input type="text" placeholder="name" v-model="inputValue.name" />
      <input type="text" placeholder="email" v-model="inputValue.email" />
      <textarea
        name=""
        id=""
        cols="100"
        rows="20"
        v-model="inputValue.comment"
      >
        </textarea>
      <button @click="sendIn()" class="sendInButton">Send in</button>

      <h2>Comments</h2>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    event: Object,
  },
  data() {
    return {
      inputValue: {
        name: "",
        email: "",
        comment: "",
      },
    };
  },
  methods: {
    apply() {
      if (this.inputValue.name >= 0) {
        alert("You need to type in your name");
      } else if (this.inputValue.email >= 0) {
        alert("You need to type in your email");
      } else {
        this.$store.commit("showWelcome");
      }
    },
    sendIn() {
      if (this.inputValue.name >= 0) {
        alert("You need to type in your name");
      } else if (this.inputValue.email >= 0) {
        alert("You need to type in your email");
      } else if (this.inputValue.comment >= 0) {
        alert("You have not written a comment");
      } else {
        this.$store.dispatch("postCommentToBackend", this.inputValue);
        console.log("commentValue", this.inputValue);
      }
    },
  },
  computed: {
    showWelcome() {
      return this.$store.state.show.showWelcome;
    },
  },
};
</script>

<style>
</style>
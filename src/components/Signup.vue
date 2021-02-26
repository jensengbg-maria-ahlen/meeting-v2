<template>
  <section>
    <div v-show="event.status !== 'old'" class="signUpNewOngoing">
      <h2>We would love you to join us on this meetup</h2>

      <label for="">Name:</label>
      <input type="text" v-model="inputValue.name" />

      <label for="">Email address:</label>
      <input type="text" v-model="inputValue.email" />

      <button @click="apply()" class="applyButton">Apply</button>

      <h2 v-if="showWelcome" class="welcomeText">
        Welcome to the event. A confirmation with more details has been sent to
        your email
      </h2>
    </div>

    <div v-show="event.status === 'old'" class="signUpOld">
      <h2>Please tell us your thoughts about this meetup</h2>
      <label for="">Name: </label>
      <input type="text" placeholder="name" v-model="inputValue.name" />

      <label for="">Email address:</label>
      <input type="text" placeholder="email" v-model="inputValue.email" />

      <label for="">Comment:</label>
      <textarea cols="20" rows="20" v-model="inputValue.comment"></textarea>

      <button @click="sendIn()" class="sendInButton">Send in</button>

      <h2 v-if="showThankYou" class="thankYouText">Thank you for your feedback</h2>

      <h2>All our reviews</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SignUp',
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
      showThankYou: false,
      showWelcome: false,
    };
  },
  methods: {
    apply() {
      if (this.inputValue.name >= 0) {
        alert("You need to type in your name");
      } else if (this.inputValue.email >= 0) {
        alert("You need to type in your email");
      } else {
        this.showWelcome = true;
        this.clearInput();
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
        let newComment = this.event.reviews;
        newComment.push(this.inputValue);
        this.showThankYou = true;
        this.$store.dispatch("postCommentToBackend", newComment);
        this.clearInput();
      }
    },

    clearInput() {
      let newValue = {
        name: "",
        email: "",
        comment: "",
      };
      this.inputValue = newValue;
      return this.inputValue;
    },
  },
};
</script>

<style>

.signUpOld {
  display: flex;
  flex-direction: column;
  padding: 1em;
  margin: 1em;
}

input {
  padding: 1rem;
  color: rgba(0, 0, 0, 0.842);
  border: 1px solid rgba(0, 0, 0, 0.12);
  transition: 0.15s all ease-in-out;
  background: white;
  display: flex;
  border-radius: 5px;
  font-size: 20px;
  width: 90%;
}

textarea {
  width: 90%;
}


button {
  width: 184px;
  height: 55px;
  background: #ffffff;
  border-radius: 50px;
  font-family: 'Open Sans', sans-serif;
  font-weight: bolder;
  font-size: medium;
  cursor: pointer;
}

.applyButton, .sendInButton {
  margin-top: 2em;
}
</style>
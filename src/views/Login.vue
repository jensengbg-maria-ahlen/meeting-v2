<template>
  <div id="login">
    <nav>
      <div class="icons">
        <img
          src="./../assets/m-icon.svg"
          alt="navIcon"
          @click="goHome('/allevents')"
        />
        <img
          src="./../assets/menu.svg"
          alt="menuIcon"
          @click="toggleMenu"
          class="menuIcon"
        />
      </div>
    </nav>

    <section v-show="isShowing" class="loginSection">
      <h1>Log in</h1>
      <div>
        <p>
          Not registered with us yet? <br />
          <strong>Sign up here</strong>
        </p>
      </div>
      <label>Email address:</label>
      <input type="text" v-model="inputValue.email" />

      <label>Password:</label>
      <input :type="passwordFieldType" v-model="inputValue.password" />

      <div class="showHide">
        <input type="checkbox" @click="showPassword()" />
        <label>Show password</label>
      </div>

      <button @click="logIn">Log in</button>
    </section>

    <section v-show="isLoggedIn" class="welcomeSection">
      <h1 class="welcomeText">Welcome</h1>
      <p @click="goHome('/allevents')">
        You can find all of our meetups <strong>here</strong>
      </p>
    </section>

    <footer>
      <p>Contact us</p>
      <img src="./../assets/facebook.svg" alt="facebook" />
      <img src="./../assets/twitter.svg" alt="twitter" />
      <img src="./../assets/instagram.svg" alt="instagram" />
      <img src="./../assets/chat.svg" alt="chat" />
    </footer>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    isShowing: true,
    isLoggedIn: false,
    inputValue: {
      email: "",
      password: "",
    },
    passwordFieldType: "password",
  }),
  methods: {
    toggleMenu() {
      this.$store.commit("toggleMenu");
    },
    goHome(route) {
      this.$router.push(route);
    },
    showPassword() {
      this.passwordFieldType =
        this.passwordFieldType === "password" ? "text" : "password";
    },
    logIn() {
      if (this.inputValue.email >= 0) {
        alert("You need to type in your email adress");
      } else if (this.inputValue.password >= 0) {
        alert("You need to type in your password");
      } else {
        this.isShowing = false;
        this.isLoggedIn = true;
      }
    },
  },
};
</script>

<style>
.loginSection {
  margin: 1em;
}

.icons {
  display: flex;
  justify-content: space-between;
}

nav {
  margin: 0 1em 0.5em 1em;
}

nav img {
  width: 4em;
  height: 4em;
  cursor: pointer;
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

.showHide {
  display: flex;
  flex-direction: row;
  margin: 1em;
}

.showHide input {
  margin-top: 5px;
  margin-left: -1em;
  width: 1em;
}

button {
  width: 184px;
  height: 55px;
  background: #ffffff;
  border-radius: 50px;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 2em;
  font-weight: bolder;
  font-size: medium;
  cursor: pointer;
}

.welcomeSection p {
  font-size: 30px;
}

.welcomeText {
  font-size: 40px;
}

footer p {
  margin: 1em;
}
footer img {
  width: 3em;
  height: 3em;
  margin: 2em;
}
</style>

<template>
  <div id="app">
    <nav>
      <button v-if="!loggedIn" @click="goRouter('home')">Home</button>
      <button v-if="!loggedIn" @click="goRouter('register')">Register</button>
      <button v-if="!loggedIn" @click="goRouter('login')">Login</button>
      <button v-if="loggedIn" @click="goRouter('dashboard')">Dashboard</button>
      <button v-if="loggedIn" @click="goRouter('account')">Account</button>      
      <button v-if="loggedIn" @click="logoutUser">Logout</button>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'app',
  methods: {
    ...mapActions('user', [
      'logout'
    ]),
    goRouter (name) {
      if(name != this.$route.name) {
        return this.$router.push({ name })
      }
    },
    logoutUser () {
      // eslint-disable-next-line
      console.log('logout')
      this.logout()
    }
  },
  computed: {
    ...mapGetters('user', [
      'loggedIn'
    ])
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

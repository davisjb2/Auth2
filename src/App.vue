<template>
  <div id="app">
    <b-navbar>
        <template slot="brand">
            <b-navbar-item tag="router-link" :to="{ path: '/' }">
                <img
                    src="./assets/logo.png"
                >
            </b-navbar-item>
        </template>
        <template slot="start">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <button v-if="!loggedIn" @click="goRouter('home')" class="button is-info diff-button">
                        <strong>Home</strong>
                    </button>
                    <button v-if="loggedIn" @click="goRouter('dashboard')" class="button is-info diff-button">
                        Dashboard
                    </button>
                    <button v-if="loggedIn" @click="goRouter('tasks')" class="button is-light diff-button">
                        Tasks
                    </button>
                    <button v-if="loggedIn" @click="goRouter('tasksMove')" class="button is-light diff-button">
                        Tasks Move
                    </button>                                         
                    <button v-if="loggedIn" @click="goRouter('account')" class="button is-light diff-button">
                        Account
                    </button>                    
                </div>
            </b-navbar-item>
        </template>

        <template slot="end">
            <b-navbar-item tag="div">
                <div class="buttons">
                    <button v-if="!loggedIn" @click="goRouter('register')" class="button is-info">
                        <strong>Sign up</strong>
                    </button>
                    <button v-if="!loggedIn" @click="goRouter('login')" class="button is-light">
                        Log in
                    </button>
                    <button v-if="loggedIn" @click="logoutUser" class="button is-light">
                        Logout
                    </button>                    
                </div>
            </b-navbar-item>
        </template>
    </b-navbar>
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
    ...mapActions('task', [
      'loadTasks'
    ]),    
    goRouter (name) {
      if(name != this.$route.name) {
        return this.$router.push({ name })
      }
    },
    logoutUser () {
      // eslint-disable-next-line
      console.log('logout')
      this.logout().then(() => {
        this.$router.push({ name: 'home' })
      })
    }
  },
  computed: {
    ...mapGetters('user', [
      'loggedIn'
    ]),
    ...mapGetters('application', [
      'getErrors'
    ])
  },
  watch: {
    getErrors() {
      if(this.getErrors.length) {
        this.$buefy.snackbar.open({
            message: this.getErrors[this.getErrors.length - 1],
            type: 'is-warning',
            position: 'is-top',
            actionText: 'Ok',
            indefinite: true
        })
      }
    }
  },
  mounted () {
    this.loadTasks()
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

.diff-button {
  background: none !important;
  color: black !important;
  border: none !important;
}
</style>

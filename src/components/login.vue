<template>
  <div>
    <h1>Login Page</h1>
    <label for="email">Email or Username</label>    
    <input type="text" name="email" v-model="user.email">
    <br>    
    <label for="password">Password</label>    
    <input type="password" name="password" v-model="user.password">
    <br>
    <button @click="submit">Submit</button>    
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      user: {
        email: "",
        password: ""
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'login'
    ]),
    submit () {
      const data = this.user
      // eslint-disable-next-line
      console.log(JSON.stringify(data, null, 2))
      this.login(data)
        .then((res) => {
          this.$router.push({ name: 'dashboard' })
          // eslint-disable-next-line
          console.log(res)
        }).catch((e) => {
          // eslint-disable-next-line
          console.log(e)
        })
    }
  }
}
</script>


<style scoped>
</style>

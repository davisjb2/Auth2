<template>
  <div>
    <h1>Register Page</h1>
    <label for="name">Name</label>
    <input type="text" name="username" v-model="user.username">
    <br>
    <label for="email">Email</label>    
    <input type="email" name="email" v-model="user.email">
    <br>    
    <label for="password">Password</label>    
    <input type="password" name="password" v-model="user.password">
    <br>    
    <label for="firstName">First Name</label>    
    <input type="text" name="firstName" v-model="user.firstName">
    <br>    
    <label for="lastName">Last Name</label>    
    <input type="text" name="lastName" v-model="user.lastName">
    <br>
    <button @click="submit">Submit</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'register',
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      }
    }
  },
  methods: {
    ...mapActions('user', [
      'register'
    ]),
    submit () {
      const data = this.user
      // eslint-disable-next-line
      console.log(JSON.stringify(data, null, 2))
      this.register(data)
        .then((res) => {
          this.$router.push({ name: 'dashboard' })
          // eslint-disable-next-line
          console.log(res)
        }).catch((e) => {
          // eslint-disable-next-line
          console.error(e)
        })
    }
  }
}
</script>


<style scoped>
</style>

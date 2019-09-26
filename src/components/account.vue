<template>
  <div>
    <h1>Account Page</h1>
    <label for="name">Name</label>
    <input :disabled="disabled" type="text" name="username" v-model="user.username">
    <br>
    <label for="email">Email</label>    
    <input :disabled="disabled" type="email" name="email" v-model="user.email">
    <br>    
    <label for="password">Password</label>    
    <input :disabled="disabled" type="password" name="password" v-model="user.password">
    <br>    
    <label for="firstName">First Name</label>    
    <input :disabled="disabled" type="text" name="firstName" v-model="user.firstName">
    <br>    
    <label for="lastName">Last Name</label>    
    <input :disabled="disabled" type="text" name="lastName" v-model="user.lastName">
    <br>
    <button v-if="!disabled" @click="submit">Submit</button>
    <button v-else @click="edit">Edit</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'account',
  data () {
    return {
      user: {
        username: '',
        email: '',
        password: '',
        firstName: '',
        lastName: ''
      },
      disabled: true
    }
  },
  methods: {
    ...mapActions('user', [
      'updateAccount'
    ]),
    submit () {
      const data = this.user
      // eslint-disable-next-line
      console.log(JSON.stringify(data, null, 2))
      this.updateAccount(data)
        .then((res) => {
          alert(res)
        }).catch((e) => {
          // eslint-disable-next-line          
          console.error(e)
        })
    },
    edit () {
      const ans = confirm('Do you want to edit?')
      this.disabled = !ans;
    }
  },
  computed: {
    ...mapGetters('user', [
      'getUser'
    ])
  },
  watch: {
    getUser (usr) {
          // eslint-disable-next-line
    console.log(this.getUser())
      this.user = JSON.parse(JSON.stringify(usr))
    }
  },
  mounted () {

    this.user = JSON.parse(JSON.stringify(this.getUser))
  }
}
</script>


<style scoped>
</style>

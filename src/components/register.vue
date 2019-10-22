<template>
  <div class="section">
    <div class="container">
      <h1 class="title">Register Page</h1>
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <b-field label="Email" label-position="on-border">
            <b-input type="email" name="email" v-model="user.email"></b-input>
          </b-field>
          <b-field label="Password" label-position="on-border">
            <b-input type="password" name="password" v-model="user.password"></b-input>
          </b-field>
          <b-field label="First Name" label-position="on-border">
            <b-input type="text" name="firstName" v-model="user.firstName"></b-input>
          </b-field>
          <b-field label="Last Name" label-position="on-border">
            <b-input type="lastName" name="lastName" v-model="user.lastName"></b-input>
          </b-field>
          <br>
          <b-button tag="input" class="button is-info"
                native-type="submit" @click="submit"
                value="Submit" />
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'register',
  data () {
    return {
      user: {
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

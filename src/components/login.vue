<template>
  <div class="section">
    <div class="container">
      <h1 class="title">Login Page</h1>
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <b-field label="Email" label-position="on-border">
            <b-input type="text" name="email" v-model="user.email"></b-input>
          </b-field>
          <b-field label="Password" label-position="on-border">
            <b-input type="password" name="password" v-model="user.password"></b-input>
          </b-field>
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

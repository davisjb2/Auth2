<template>
  <div class="section">
    <div class="container">
      <h1 class="title">Account Page</h1>
      <div class="columns">
        <div class="column"></div>
        <div class="column">
          <b-field label="Email" label-position="on-border">
            <b-input :disabled="disabled" type="email" name="email" v-model="user.email"></b-input>
          </b-field>
          <b-field label="Password" label-position="on-border">
            <b-input :disabled="disabled" type="password" name="password" v-model="user.password"></b-input>
          </b-field>
          <b-field label="First Name" label-position="on-border">
            <b-input :disabled="disabled" type="text" name="firstName" v-model="user.firstName"></b-input>
          </b-field>
          <b-field label="Last Name" label-position="on-border">
            <b-input :disabled="disabled" type="lastName" name="lastName" v-model="user.lastName"></b-input>
          </b-field>
          <br>
          <b-button tag="input" v-if="disabled" class="button is-info"
                native-type="submit" @click="edit"
                value="Edit" />
          <b-button tag="input" v-else class="button is-info"
                native-type="submit" @click="submit"
                value="Submit" />                
        </div>
        <div class="column"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'account',
  data () {
    return {
      user: {
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
          console.log(res)
          this.disabled = true
          this.user = JSON.parse(JSON.stringify(this.getUser))
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
    console.log(this.getUser)
    this.user = JSON.parse(JSON.stringify(this.getUser))
  }
}
</script>


<style scoped>
</style>

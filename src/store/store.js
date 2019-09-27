import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import task from './modules/task'
import application from './modules/application'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: false,
    modules: {
        user,
        application,
        task
    }
})
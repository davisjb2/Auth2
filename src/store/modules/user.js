import axios from 'axios'

const state = {
    user: {
        username: '',
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    },
    loggedIn: false
}

const mutations = {
    'LOGIN' (state, data) {
        state.user = data
        state.loggedIn = true
    },
    'LOGOUT' (state) {
        state.user = {
            username: '',
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        state.loggedIn = false
    },
}

const actions = {
    async register ({ commit }, user) {
        const userResult = await axios.post('/auth/register', { username: user.username, password: user.password, firstName: user.firstName, lastName: user.lastName, email: user.email })
        if(userResult.data.status == 200) 
        {
            commit('LOGIN', { username: userResult.data.result.username, password: userResult.data.result.password, firstName: userResult.data.result.firstName, lastName: userResult.data.result.lastName, email: userResult.data.result.email })
            return { success: true }
        }
        // eslint-disable-next-line
        console.log('error creating account', userResult)
        commit('application/ERROR', userResult.data.error)
        return { success: false }
    },
    async login ({ commit }, user) {
        const userResult = await axios.post('/auth/login', { username: user.email, password: user.password })
        if(userResult.data.status == 200) 
        {
            commit('LOGIN', { username: userResult.data.result.username, password: userResult.data.result.password, firstName: userResult.data.result.firstName, lastName: userResult.data.result.lastName, email: userResult.data.result.email })
            return { success: true }
        }
        // eslint-disable-next-line
        console.log('error logging in', userResult)
        commit('application/ERROR', userResult.data.error)
        return { success: false }
    },
    async logout ({ commit }) {
        const userResult = await axios.get('/auth/logout')
        if(userResult.data.status == 200) 
        {
            commit('LOGOUT')
            return { success: true }
        }
        // eslint-disable-next-line
        console.log('error logging out', userResult)
        commit('application/ERROR', userResult.data.error)
        return { success: false }
    },
     // eslint-disable-next-line
    async updateAccount ({ commit }, user) {
        // eslint-disable-next-line
        console.log(user)
    }
}

const getters = {
    loggedIn (state) {
        return state.loggedIn
    },
    getUser (state) {
        return state.user
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
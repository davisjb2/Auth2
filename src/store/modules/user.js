import axios from 'axios'

const state = {
    user: {
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
            firstName: '',
            lastName: '',
            email: '',
            password: ''
        }
        state.loggedIn = false
    },
    'UPDATE_USER' (state, data) {
        state.user = data
    }
}

const actions = {
    async register ({ commit }, user) {
        const userResult = await axios.post('/auth/register', user)
        if(userResult.data.status == 200) 
        {
            commit('LOGIN', userResult.data.result )
            return { success: true }
        }
        // eslint-disable-next-line
        console.log('error creating account', userResult)
        commit('application/ERROR', userResult.data.error)
        return { success: false }
    },
    async login ({ commit }, user) {
        const userResult = await axios.post('/auth/login', user)
        if(userResult.data.status == 200) 
        {
            commit('LOGIN', userResult.data.result)
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
        const userResult = await axios.post(`/auth/update/`, user)
        if(userResult.data.status == 200)
        {
            commit('UPDATE_USER', userResult.data.result)
            return { success: true }
        }
        // eslint-disable-next-line
        console.log("Error updating user", userResult.data.error)
        commit('application/ERROR', 'Error updating user')
        return { success: false }  
    },
    async reauth ({ commit }) {
        const userResult = await axios.get('/auth/reauth')
        if(userResult.data.status == 200 && userResult.data.result != undefined)
        {
            commit('LOGIN', userResult.data.result)
            return { success: true }
        }
        return { success: false }
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
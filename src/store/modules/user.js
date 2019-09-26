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
        // eslint-disable-next-line
        console.log(user)
        commit('LOGIN', user)
    },
    async login ({ commit }, user) {
        // eslint-disable-next-line
        console.log(user)
        commit('LOGIN', user)
    },
    async logout ({ commit }) {
        // eslint-disable-next-line
        commit('LOGOUT')
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
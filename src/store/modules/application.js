const state = {
    errors: []
}

const mutations = {
    'ERROR' (state, data) {
        state.errors.push(data)
    }
}

const actions = {
    pushError ({ commit }, error) {
        // eslint-disable-next-line
        console.log(error)
        commit('ERROR', error)
    }
}

const getters = {
    getErrors (state) {
        return state.errors
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
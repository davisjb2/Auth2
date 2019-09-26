const state = {
    tasks: []
}

const mutations = {
    'CREATE' (state, data) {
        state.task.push(data)
    },
    'DELETE' (state, id) {
        state.tasks.filter(function(e) {
            return e.id != id
        })
    },
}

const actions = {
    async create ({ commit }, task) {
        // eslint-disable-next-line
        console.log(task)
        commit('CREATE', task)
    },
    async update ({ commit }, task) {
        // eslint-disable-next-line
        console.log(task)
    },
    async delete ({ commit }, id) {
        // eslint-disable-next-line
        console.log(id)
        commit('DELETE', id)
    }
}

const getters = {
    tasks (state) {
        return state.tasks
    }
}

export default {
    namespaced: true,
    state,
    actions,
    mutations,
    getters
}
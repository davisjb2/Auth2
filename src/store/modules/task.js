const state = {
    tasks: []
}

const mutations = {
    'CREATE_TASK' (state, data) {
        data.id = state.tasks.length
        state.tasks.push(data)
    },
    'DELETE_TASK' (state, id) {
        state.tasks.filter(function(e) {
            return e.id != id
        })
    },
}

const actions = {
    async createTask ({ commit }, task) {
        // eslint-disable-next-line
        console.log(task)
        commit('CREATE_TASK', task)
    },
    // eslint-disable-next-line    
    async updateTask ({ commit }, task) {
        // eslint-disable-next-line
        console.log(task)
    },
    // eslint-disable-next-line
    async deleteTask ({ commit }, id) {
        // eslint-disable-next-line
        console.log(id)
        commit('DELETE_TASK', id)
    },
}

const getters = {
    getTasks (state) {
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
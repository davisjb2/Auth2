import axios from 'axios'

const state = {
    tasks: []
}

const mutations = {
    'CREATE_TASK' (state, data) {
        state.tasks.push(data)
    },
    'DELETE_TASK' (state, id) {
        state.tasks.filter(function(e) {
            return e.id != id
        })
    },
    'UPDATE_TASK' (state, data) {
        var index = state.tasks.findIndex(e => e.id === data.id)
        state.tasks[index] = data
    },
    'LOAD_TASKS' (state, data) {
        state.tasks = data
    }
}

const actions = {
    async createTask ({ commit }, task) {
        const taskResult = await axios.post('/tasks/create', task)
        if(taskResult.data.status == 200)
        {
            commit('CREATE_TASK', taskResult.data.result)
            return { success: true }
        }
        // eslint-disable-next-line
        console.log("Error creating task")
        commit('application/ERROR', 'Error creating task')
        return { success: false }
    },
    // eslint-disable-next-line    
    async updateTask ({ commit }, task) {
        const taskResult = await axios.post(`/tasks/update/${task.id}`, task)
        if(taskResult.data.status == 200)
        {
            commit('UPDATE_TASK', taskResult.data.result)
            return { success: true }
        }
        // eslint-disable-next-line
        console.log("Error updating task", taskResult.data.error)
        commit('application/ERROR', 'Error updating task')
        return { success: false }  
    },
    // eslint-disable-next-line
    async deleteTask ({ commit }, id) {
        const taskResult = await axios.post(`/tasks/delete/${id}`)
        if(taskResult.data.status == 200)
        {
            commit('DELETE_TASK', id)
            return { success: true }
        }
        // eslint-disable-next-line
        console.log("Error deleting task")
        commit('application/ERROR', 'Error deleting task')
        return { success: false }  
    },
    async loadTasks ({ commit }) {
        const tasksResult = await axios.get('/tasks')
        if(tasksResult.data.status == 200)
        {
            commit('LOAD_TASKS', tasksResult.data.result)
            return { success: true }
        }
        // eslint-disable-next-line
        console.log("Error loading tasks")
        commit('application/ERROR', 'Error loading tasks')
        return { success: false }  
    }
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
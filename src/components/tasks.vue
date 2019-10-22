<template>
    <div class="section">
        <div class="container">
            <h1 class="title">Tasks</h1>
            <b-button tag="input" class="button is-info" value="Create New Task" @click="create"/> 
            <b-table :data="taskData" :columns="columns" @select="edit"></b-table>
        </div>

         <b-modal :active.sync="modalActive" has-modal-card>
            <create-task></create-task>
        </b-modal>

         <b-modal :active.sync="modalEditActive" has-modal-card>
            <edit-task v-bind="formProps"></edit-task>
        </b-modal>
        
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import createTask from '../components/createTask'
import editTask from '../components/editTask'
export default {
  name: 'tasks',
  data() {
            return {
                taskData: [],
                columns: [
                    {
                        field: 'id',
                        label: 'ID',
                        width: '40',
                        numeric: true
                    },
                    {
                        field: 'name',
                        label: 'Title',
                    },
                    {
                        field: 'dueDate',
                        label: 'Due Date',
                    },
                    {
                        field: 'completed',
                        label: 'Completed',
                        centered: true
                    }
                ],
                modalActive: false,
                modalEditActive: false,
                formProps: {
                    task: {
                        id: 0,
                        dueDate: '',
                        name: '',
                        completed: false
                    }                    
                }
            }
  },
  components: {
      createTask,
      editTask
  },
  methods: {
    ...mapActions('task', [
        'loadTasks'
    ]),
    create() {
        this.modalActive = true;
    },
    edit(res) {
        this.formProps.task = res;
        this.modalEditActive = true;
    }
  },
  computed: {
    ...mapGetters('task', [
        'getTasks'
    ])
  },
  watch: {
    getTasks() {
      this.taskData = JSON.parse(JSON.stringify(this.getTasks))
        .map(el => {
            el.dueDate = new Date(el.dueDate)
            return el
        })
    }
  },
  mounted () {
      this.loadTasks().then(() => {
        this.taskData = JSON.parse(JSON.stringify(this.getTasks))
        .map(el => {
            el.dueDate = new Date(el.dueDate)
            return el
        })
        /* eslint-disable */
        console.log("taskData mounted")
      })

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

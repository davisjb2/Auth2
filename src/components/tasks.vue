<template>
    <div class="section">
        <div class="container">
            <h1 class="title">Tasks</h1>
            <b-button tag="input" class="button is-info" value="Create New Task" @click="create"/> 
            <b-table :data="taskData" :columns="columns" @select="edit"></b-table>
        </div>

         <b-modal :active.sync="modalActive" has-modal-card>
            <modal-form></modal-form>
        </b-modal>
        
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import modalForm from '../components/task'
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
                modalActive: false
            }
  },
  components: {
      modalForm
  },
  methods: {
    ...mapActions('task', [
        'updateTask'
    ]),
    create() {
        this.modalActive = true;
    },
    edit(res) {
        this.updateTask(res);
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
    }
  },
  mounted () {
      this.taskData = JSON.parse(JSON.stringify(this.getTasks))
      /* eslint-disable */
      console.log("taskData mounted")
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

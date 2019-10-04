<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">New Task</p>
        </header>
        <section class="modal-card-body">
            <b-field label="Name" label-position="on-border">
                <b-input
                    type="text"
                    v-model="task.name">
                </b-input>
            </b-field>
            <b-field label="Due Date" label-position="on-border">
                <b-datepicker
                    icon="calendar-today" v-model="task.dueDate">
                </b-datepicker>
            </b-field>

            <b-checkbox v-model="task.completed">Completed?</b-checkbox>
        </section>
        <footer class="modal-card-foot">
            <button class="button" type="button" @click="$parent.close()">Close</button>
            <button class="button is-primary" @click="create">Create</button>
        </footer>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'create',
  data () {
    return {
      task: {
        name: '',
        completed: false,
        dueDate: new Date(),
        lane: 0
      }
    }
  },
  methods: {
    ...mapActions('task', [
      'createTask'
    ]),
    create () {
      const data = this.task
      // eslint-disable-next-line
      console.log(JSON.stringify(data, null, 2))
      this.createTask(data)
        .then(() => {
          this.$parent.close()
        }).catch((e) => {
          // eslint-disable-next-line
          console.error(e)
        })
    }
  }
}
</script>


<style scoped>
</style>

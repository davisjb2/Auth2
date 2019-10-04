<template>
    <div class="modal-card" style="width: auto">
        <header class="modal-card-head">
            <p class="modal-card-title">Edit Task</p>
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
            <button class="button is-primary" @click="edit">Edit</button>
        </footer>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'edit',
  props: ['task'],
  methods: {
    ...mapActions('task', [
      'updateTask'
    ]),
    edit () {
      const data = this.task
      this.updateTask(data)
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

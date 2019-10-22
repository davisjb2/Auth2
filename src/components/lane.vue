<template>
    <div class="box">
        <h4>{{ title }}</h4>
        <div>
            <draggable class="lane-body" v-model="taskData" :options="{ group: 'default' }" @change="doChange">
                <div v-for="task in taskData" :key="task.id">
                    <card :task="task"></card>
                </div>
            </draggable>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import draggable from 'vuedraggable'
import card from './card'
export default {
  name: 'lane',
  data() {
        return {
            taskData: []
        }
  },
  props: [ 'id', 'title' ],
  components: {
      draggable,
      card
  },
  methods: {
      ...mapActions('task', [
          'updateTask',
          'loadTasks'
      ]),
      doChange (evt) {
         if(evt.added) {
            const data = evt.added.element
            data.lane = this.id
            this.updateTask(data)
                .then(() => {
                }).catch((e) => {
                // eslint-disable-next-line
                console.error(e)
            })
        }
      }
  },
  computed: {
    ...mapGetters('task', [
        'getTasks'
    ])
  },
  watch: {
    getTasks() {
        this.taskData = JSON.parse(JSON.stringify(this.getTasks)).filter(el => el.lane == this.id)
    }
  },
  mounted () { 
      this.loadTasks().then(() => {
        this.taskData = JSON.parse(JSON.stringify(this.getTasks)).filter(el => el.lane == this.id)
      })
   }
}
</script>

<style>
.lane-body {
    min-height: 50vh;
}
</style>

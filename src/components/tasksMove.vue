<template>
    <div class="section">
        <div class="container">
            <h1 class="title">Moving Tasks</h1>
            <div class="columns">
                <div class="column box">
                    <lane id="0" title="Todo"></lane>
                </div>
                <div class="column box">
                    <lane id="1" title="In Progress"></lane>
                </div>
                <div class="column box">
                    <lane id="2" title="Done"></lane>
                </div>
            </div>
        </div>        
        
    </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import lane from './lane'
export default {
  name: 'taskMove',
  components: {
      lane
  }
}
</script>

<style scoped>

</style>

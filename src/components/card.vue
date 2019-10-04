<template>
    <div class="card">
        <div>
            <h5>
                {{ task.id }}
            </h5>
            <h4>
                {{ task.name }}
            </h4>
        </div>
    </div>
</template>

<script>
export default {
  name: 'card',
  props: [
      'task'
  ]
}
</script>

<style>
.card {
    background: blue;
    color: white;
}
</style>

<template>
  <tr>
    <td>{{task.task_name}}</td>
    <td>{{task.tag_type}}</td>
    <td>{{task.complete_status}}</td>
    <td>
      <div class="btn-group">
        <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#editModal" @click="editTask(task._id)">Edit</button>
        <button type="button" class="btn btn-primary" @click="deleteTask(task._id)">Delete</button>
        <button type="button" class="btn btn-primary" @click="completeTask(task._id)">Complete</button>
      </div> 
    </td>
  </tr>
</template>

<script>
export default {
  props: ['task'],
  methods: {
    deleteTask (taskID) {
      this.$emit('deletetask', taskID)
    },
    completeTask (taskID) {
      this.$emit('completetask', taskID)
    },
    editTask (taskID) {
      this.$store.commit('populateEditModal', taskID)
    }
  }
}
</script>

<style>

</style>

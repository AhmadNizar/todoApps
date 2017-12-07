<template>
  <div id="editModal" class="modal fade" role="dialog">
    <div class="modal-dialog">   
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Update Task</h4>
        </div>
        <div class="modal-body">
          Task name : <input v-model="task_data.task_name"><br/>
          <br/>
          Task tag  : <input v-model="task_data.tag_type"><br/>  
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-default" @click="updateTaskData">Update Data</button>
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      task_data: {
        task_name: '',
        tag_type: ''
      },
      coba: ''
    }
  },
  computed: {
    populateData () {
      this.task_data.task_name = this.$store.state.editTask.task_name
      this.task_data.tag_type = this.$store.state.editTask.tag_type
    }
  },
  watch: {
    populateData (newData) {}
  },
  methods: {
    updateTaskData () {
      this.$store.dispatch('updateTaskData', {
        task_name: this.task_data.task_name,
        tag_type: this.task_data.tag_type,
        taskId: this.$store.state.editTask._id
      })
      .then(data => alert('update the data'))
    }
  }
}
</script>

<style>

</style>

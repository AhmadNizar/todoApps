<template>
  <div id="myModal" class="modal fade" role="dialog">
    <div class="modal-dialog">   
      <!-- Modal content-->
      <div class="modal-content">
        <div class="modal-header">
          <button type="button" class="close" data-dismiss="modal">&times;</button>
          <h4 class="modal-title">Add New Task</h4>
        </div>
        <div class="modal-body">
          Task name : <input v-model="task_data.task_name"><br/>
          <br/>
          Task tag  : <input v-model="task_data.task_tag"><br/>  
        </div>
        <div class="modal-footer">
        <button type="button" class="btn btn-default" @click="addnewTask">Add Data</button>
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
        task_name: ``,
        task_tag: ``
      }
    }
  },
  methods: {
    addnewTask () {
      this.$store.dispatch('addnewTask', this.task_data)
    }
  }
}
</script>

<style>

</style>

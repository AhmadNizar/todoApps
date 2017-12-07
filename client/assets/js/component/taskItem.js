Vue.component('task-item', {
  props : ['task'],
  template : `
  <tr>
    <td>{{task.task_name}}</td>
    <td>{{task.tag_type}}</td>
    <td>{{task.complete_status}}</td>
    <td>
      <div class="btn-group">
        <button type="button" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-primary" v-on:click="deleteTask(task._id)">Delete</button>
        <button type="button" class="btn btn-primary">Complete</button>
      </div> 
    </td>
  </tr>
  `,
  methods: {
    deleteTask (taskID) {
      this.$emit('deletetask', taskID)
    }
  }
})
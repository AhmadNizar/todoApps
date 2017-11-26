Vue.component('task-list', {
  props : ['task'],
  template : `
  <tr>
    <td>{{task.task_name}}</td>
    <td>{{task.tag_type}}</td>
    <td>{{task.complete_status}}</td>
    <td>
      <div class="btn-group">
        <button type="button" class="btn btn-primary">Edit</button>
        <button type="button" class="btn btn-primary">Delete</button>
        <button type="button" class="btn btn-primary">Complete</button>
      </div> 
    </td>
  </tr>
  `
})
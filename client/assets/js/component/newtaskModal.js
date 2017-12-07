Vue.component('task-modal', {
  template : `
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
  `,
  data () {
    return {
      task_data : {
        task_name : ``,
        task_tag : []
      }
    }
  },
  methods : {
    addnewTask () {
      axios.post('http://localhost:3000/api/tasks/5a0fc607af853f0c6a673fc5/createtask', {
        task_name : this.task_data.task_name,
        tag_type  : this.task_data.task_tag
      })
      .then(function (response) {
        location.reload()
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})
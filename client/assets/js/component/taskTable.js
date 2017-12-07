Vue.component('task-table', {
  template :`
  <div class="container">
    <div class="jumbotron well">
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Task Name</th>
              <th>Task Tag</th>
              <th>Complete Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <task-item v-for="(task, index) in tasklist" :key="index" :task="task" v-on:deletetask="deleteUserTask"></task-item>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `,
  data () {
    return {
      tasklist : []
    }
  },
  methods :{
    getUserTask () {
      axios.get('http://localhost:3000/api/tasks/5a0fc607af853f0c6a673fc5')
      .then(({data}) => {
        console.log(this.tasklist)
        this.tasklist = data
        $("#sukses").hide();
        $("#gagal").hide();
      }) 
      .catch((error) => {
        console.log(error);
      })
    },
    deleteUserTask (userId) {
      console.log(userId)
      axios.delete(`http://localhost:3000/api/tasks/${userId}`)
      .then((res) => {
        if(res.status === 200){   
          let deleteIndex = this.tasklist.findIndex((element) => {
            return element._id === userId
          })

          this.tasklist.splice(deleteIndex, 1)
        }
      }) 
      .catch((error) => {
        console.log(error);
      })
    }
  },
  created() {
    this.getUserTask()
  }
})


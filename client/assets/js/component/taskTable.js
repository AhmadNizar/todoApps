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
            <task-list v-for="(task, index) in tasklist" :key="index" :task="task"></task-list>
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
    }
  },
  created() {
    this.getUserTask()
  }
})


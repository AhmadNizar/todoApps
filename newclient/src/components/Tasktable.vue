<template>
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
            <Taskitem v-for="task in Tasklist" :key="task._id" :task="task" v-on:deletetask="deleteUserTask" v-on:completetask="completeUserTask"></Taskitem>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import Taskitem from './Taskitem'
export default {
  components: {
    Taskitem
  },
  computed: {
    Tasklist () {
      return this.$store.state.todolist
    }
  },
  methods: {
    deleteUserTask (taskId) {
      this.$store.dispatch('deleteTodolist', taskId)
    },
    completeUserTask (taskId) {
      this.$http.put(`/api/tasks/${taskId}`, {
        complete_status: true
      })
      .then(res => {
        if (res.status === 200) {
          let updateIndex = this.tasklist.findIndex((element) => {
            return element._id === taskId
          })
          this.tasklist[updateIndex].complete_status = true
        }
      })
      .catch(err => console.error(err))
    }
  }
}
</script>

<style>

</style>

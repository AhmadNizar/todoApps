<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <a class="navbar-brand" href="#">Todo Pak Haji</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav navbar-right">
        <li><a href="" data-toggle="modal" data-target="#myModal"><span class="glyphicon glyphicon-user"></span>Add Task</a></li>
        <li><a href="" @click="userLogout"><span class="glyphicon glyphicon-log-in"></span>Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
</template>

<script>
export default {
  methods: {
    userLogout () {
      localStorage.removeItem('tokenTodo')
      this.$router.push({name: 'Login'})
    }
  }
}
</script>

<style>

</style>

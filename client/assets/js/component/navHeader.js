Vue.component('nav-header', {
  template : `
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#">Todo Apps</a>
        </div>
        <ul class="nav navbar-nav navbar-right">
          <li><a href="#"><span class="glyphicon glyphicon-user"></span>Add Task</a></li>
          <li><a href="#"><span class="glyphicon glyphicon-log-in"></span>Logout</a></li>
        </ul>
      </div>
    </nav>
  `
})
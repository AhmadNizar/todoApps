(function getTask() {
  console.log('AhmadNizar')
  axios.get('http://localhost:3000/api/tasks/5a0fc607af853f0c6a673fc5')
  .then(function (response) {
		console.log(response.data);
		response.data.forEach(userTask => {
			$("#taskUser").append(`
				<tr>
					<td>${userTask.task_name}</td>
					<td>${userTask.tag_type}</td>
					<td>${userTask.complete_status}</td>
					<td>
						<div class="btn-group">
							<button type="button" class="btn btn-primary">Edit</button>
							<button type="button" class="btn btn-primary">Delete</button>
							<button type="button" class="btn btn-primary">Complete</button>
						</div> 
					</td>
				</tr>
			`)
		})
		$("#sukses").hide();
		$("#gagal").hide();
  })
  .catch(function (error) {
    console.log(error);
  });
}())
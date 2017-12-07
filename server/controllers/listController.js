const jwt  = require('jsonwebtoken');
const List = require('../models/listModel')

class Taskctlr {
	static findTaskByUserId (req, res) {
		let decoded = jwt.verify(req.headers.token, 'shhhhh')
		if (!decoded.isLogin){
			res.status(403).send('User not found')
		} else {
			List.find({
				user_id : decoded._id
			})
			.then(taskData => {
				res.send(taskData)
			})
			.catch(err => {
				res.status(500).send(err)
			})
		}
	}
	
	static createTask (req, res) {
		let decoded = jwt.verify(req.headers.token, 'shhhhh')
		if (!decoded.isLogin) {
			res.status(403).send('User not found')
		} else {
			List.create({
				task_name : req.body.task_name,
				tag_type  : req.body.tag_type,
				complete_status : false,
				createdAt : new Date(),
				updatedAt : new Date(),
				completedAt : null,
				user_id : decoded._id
			})
			.then(dataUser => {
				res.status(200).send(dataUser)
			})
			.catch(err => {
				res.status(500).send(err)
			})
		}
	}

	static updateTask (req, res) {
		List.findById(req.params.id)
		.then(taskData => {
			taskData.task_name = req.body.task_name || taskData.task_name,
			taskData.tag_type  = req.body.tag_type ||taskData.tag_type,
			taskData.complete_status = req.body.complete_status || taskData.complete_status,
			taskData.updatedAt = new Date(),
			taskData.completedAt = new Date() || taskData.completedAt

			taskData.save()
			.then(newtaskData => res.status(200).send(newtaskData))
			.catch(err => res.status(500).send(err))
		})
		.catch(err => res.status(500).send(err))
	}
	
	static deleteTask (req, res) {
		List.findByIdAndRemove(req.params.id)
		.then(task => res.status(200).send(task))
		.catch(err => res.status(500).send(err))
	}
}

module.exports = Taskctlr
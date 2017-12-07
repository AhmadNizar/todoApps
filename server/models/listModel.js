const mongoose = require('mongoose')
const Schema   = mongoose.Schema

var taskSchema = new Schema({
	task_name : String,
	tag_type : [{
        type  : String
    }],
	complete_status : Boolean,
	createdAt : Date,
	updatedAt : Date,
    completedAt : Date,
    user_id : {
		type: Schema.Types.ObjectId,
		ref : 'User'
	}
})

var Task = mongoose.model('Task', taskSchema)

module.exports = Task
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/todo');
const Schema   = mongoose.Schema

var userSchema = new Schema({
	name     : String,
	memberid : String,
    email    : String,
    password : String, 
	createdAt: Date,
	updatedAt: Date
})

var User = mongoose.model('User', userSchema)

module.exports = User
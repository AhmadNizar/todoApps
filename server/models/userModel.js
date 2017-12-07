const mongoose = require('mongoose')
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
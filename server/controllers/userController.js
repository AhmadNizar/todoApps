const FB = require('fb')
const fb = new FB.Facebook({version: 'v2.8'})
const bcrypt = require('bcrypt')
const jwt 	 = require('jsonwebtoken')
const User 	 = require('../models/userModel')
const saltRounds = 10

class UserCtrl {

  static findAllUser (req, res) {
    User.find()
    .then(dataUsers => {
      res.send(dataUsers)
    })
    .catch(err => {
      res.status(500).send(err);
    })
  }
    
  static findUserById (req, res) {
    User.findById(req.params.id)
    .then(dataUser => {
      res.send(dataUser)
    })
    .then(err => {
      res.status(500).send(err)
    })
  }
    
  static createUser (req, res) {
		bcrypt.hash(req.body.password, saltRounds).then((hash) => {
			// Store hash in your password DB.
			User.create({
				name     : req.body.name,
				fbid     : req.body.fbid || null,
				email    : req.body.email,
				password : hash || null, 
				createdAt: new Date(),
				updatedAt: new Date()
			})
			.then(dataUser => {
				res.send(dataUser)
			})
			.catch(err => {
				res.status(500).send(err)
			})
		})
  }
    
  static loginUser (req, res) {
    User.findOne({
      email: req.body.email
    })
    .then(dataUser => {
			console.log(dataUser)
			if(dataUser === null){
				res.send('invalid')
			} else {
				bcrypt.compare(req.body.password, dataUser.password).then(function(response) {
					// res == true
					if(response) {
						let token = jwt.sign({ 
							_id: dataUser._id,
							isLogin: true }, 'shhhhh')
						res.send(token)
					} else {
						res.send('invalid')
					}
				})
			}
    })
    .catch(err => res.status(500).send(err))
	}
	
	static loginFB (req, res) {
		User.findOne({
			memberid: req.body.userID
		})
		.then(userData => {
			if (userData === null) {
				FB.setAccessToken(req.body.fbToken)
				FB.api(req.body.userID, { fields: ['id', 'name', 'email'] }, (response) => {
					if(!response || response.error) {
					 console.log(!response ? 'error occurred' : response.error);
					 res.status(500).send(response.error)
					}
					
					User.create({
						name     : response.name,
						fbid     : response.id,
						email    : response.email,
						password : null, 
						createdAt: new Date(),
						updatedAt: new Date()
					})
					.then(dataUser => {
						let token = jwt.sign({ 
							_id: dataUser._id,
							isLogin: true }, 'shhhhh')
						res.send(token)
					})
					.catch(err => {
						res.status(500).send(err)
					})
				})
			} else {
				let token = jwt.sign({ 
					_id: dataUser._id,
					isLogin: true }, 'shhhhh')
				res.send(token)
			}
		})
		.catch(err => res.status(500).send(err))
	}
}

module.exports = UserCtrl
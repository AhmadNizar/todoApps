const User = require('../models/userModel')

const findAllUser = (req, res) => {
    User.find()
    .then(dataUsers => {
        res.send(dataUsers)
    })
    .catch(err => {
        res.status(500).send(err);
    })
}

const findUserById = (req, res) => {
    User.findById(req.params.id)
    .then(dataUser => {
        res.send(dataUser)
    })
    .then(err => {
        res.status(500).send(err)
    })
}

const createUser = (req, res) => {
    User.create({
        name     : req.body.name,
        memberid : req.body.memberid || null,
        email    : req.body.email,
        password : req.body.password, 
        createdAt: new Date(),
        updatedAt: new Date()
    })
    .then(dataUser => {
        res.send(dataUser)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports = {
    findAllUser,
    findUserById,
    createUser
}
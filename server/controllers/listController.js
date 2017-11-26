const List = require('../models/listModel')

const findTaskByUserId = (req, res) => {
    List.find({
        user_id : req.params.id
    })
    .then(taskData => {
        res.send(taskData)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

const createTask = (req, res) => {
    List.create({
        task_name : req.body.task_name,
        tag_type  : req.body.task_tag,
        complete_status : false,
        createdAt : new Date(),
        updatedAt : new Date(),
        completedAt : null,
        user_id : req.params.id
    })
    .then(dataUser => {
        res.send(dataUser)
    })
    .catch(err => {
        res.status(500).send(err)
    })
}

module.exports = {
    findTaskByUserId,
    createTask
}
const router = require('express').Router()
const List   = require('../controllers/listController')

router.get('/', List.findTaskByUserId)
// router.get('/:id', User.findUserById)
router.post('/createtask', List.createTask)
router.put('/:id', List.updateTask)
router.delete('/:id', List.deleteTask)

module.exports = router
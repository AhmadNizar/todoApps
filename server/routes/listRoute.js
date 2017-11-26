const router = require('express').Router()
const List   = require('../controllers/listController')

router.get('/:id', List.findTaskByUserId)
// router.get('/:id', User.findUserById)
router.post('/:id/createtask', List.createTask)
// router.put('/:id', User.updateOne)
// router.delete('/:id', User.deleteOne)

module.exports = router
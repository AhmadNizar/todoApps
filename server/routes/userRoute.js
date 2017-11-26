const router = require('express').Router()
const User   = require('../controllers/userController')

router.get('/', User.findAllUser)
router.get('/:id', User.findUserById)
router.post('/', User.createUser)
// router.put('/:id', User.updateOne)
// router.delete('/:id', User.deleteOne)

module.exports = router
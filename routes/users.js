const controllers = require('../controllers/users');
const router = require('express').Router();

//CRUD Routes /Users
router.get('/', controllers.getUsers);
router.get('/:userId', controllers.getUser);
router.post('/', controllers.createUser);
router.put('/:userId', controllers.updateUser);
router.delete('/:userId', controllers.deleteUser);

module.exports = router;

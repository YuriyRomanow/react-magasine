const Router = require('express');

//создаем класс роутера
const router = new Router();

//вызов контроллера
const userController = require('../controllers/userController');

router.post('/registration', userController.registration);
router.post('/login', userController.login);
router.get('/auth', userController.check);

module.exports = router;
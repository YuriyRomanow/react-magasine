const Router = require('express');

//создаем класс роутера
const router = new Router();
//мпортирую все сделанные роутеры
const deviceRouter = require('./deviceRouter');
const userRouter = require('./userRouter');
const brandRouter = require('./brandRouter');
const typeRouter = require('./typeRouter');
//сопоставляю маршрут с соответствующим роутом
router.use('/user', userRouter)
router.use('/type', typeRouter);
router.use('/brand', brandRouter);
router.use('/device', deviceRouter);

module.exports = router;
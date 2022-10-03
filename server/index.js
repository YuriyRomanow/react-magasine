require('dotenv').config()

const express = require('express');
const sequelize = require('./db');
//импортируем классы бд
const models = require('./models/models');
const cors = require('cors');
//импорт основоного роутера
const router = require('./routes/index');
//порт на котором будет открываться приложение
const PORT = process.env.PORT || 5000;

const app = express();
// настройка корс, чтобы отправлять запросы с базы
app.use(cors());
app.use(express.json());
app.use('/api', router);


const start = async () => {
    try {
        // с помощью функции authenticate устанавлифвается подключение к базе данных
        // await вызывается потому, что функция асинхронная
        await sequelize.authenticate();

        // эта фуункция сверяет базу данных со схемой данных
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (e) {
        console.log(e)
    }
}


//указываем какой порт должен прослушиваться сервером
//первый парамметр это порт,а второй параметр callback с указанием порта

//вызов функции
start();
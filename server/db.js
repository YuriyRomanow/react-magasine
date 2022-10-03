const {Sequelize} = require('sequelize');
//БД
//экспорт sequelize

//создаем объект котрый хотим экспортировать
module.exports = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        dialect: 'postgres',
        host: process.env.DB_HOST,
        port: process.env.DB_PORT
    }
)
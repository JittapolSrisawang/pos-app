const {Sequelize} = require('sequelize');

const sequelize = new Sequelize('db_pos_cloud', 'postgres', '12345678', {
    host: 'localhost',
    dialect: 'postgres',
    logging: false
});

module.exports = sequelize;
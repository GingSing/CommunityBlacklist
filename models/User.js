const sequelize = require('../sequelizedb');
const Sequelize = require('sequelize');
const Model = Sequelize.Model;

class User extends Model {}
User.init({
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    ebayUserName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: Sequelize.TEXT,
        allowNull: false
    }
},
{
    sequelize,
    modelName: 'user'
})
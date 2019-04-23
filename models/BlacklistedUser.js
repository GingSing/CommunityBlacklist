const Sequelize = require('sequelize');
const sequelize = require('../sequelizedb');
const Model = Sequelize.Model;

//TODO: Link BlackListedUser and Users

class BlacklistedUser extends Model(){}
BlacklistedUser.init({
    ebayUserName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    evidence: {
        type: Sequelize.ARRAY,
        allowNull: false
    },
    comments: {
        type: Sequelize.ARRAY,
        default: []
    },
    votes: {
        type: Sequelize.NUMBER,
        default: 0
    },
    voters: {
        type: Sequelize.ARRAY,
        default: []
    }
},
{
    sequelize,
    model: 'blacklisteduser'
});
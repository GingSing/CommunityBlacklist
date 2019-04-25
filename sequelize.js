const Sequelize = require('sequelize');
const UserModel = require('./models/User');
const BlacklistedUserModel = require('./models/BlacklistedUser');

const sequelize = new Sequelize(process.env.CONNECTION_URI);

const User = UserModel(sequelize, Sequelize);
const BlacklistedUser = BlacklistedUserModel(sequelize, Sequelize);

sequelize.sync()
    .then(() => {
        console.log(`Database & Tables created!`)
    });

module.exports={
    sequelize,
    User,
    BlacklistedUser
};
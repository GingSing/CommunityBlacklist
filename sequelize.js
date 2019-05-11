const Sequelize = require('sequelize');
const UserModel = require('./models/User');
const BlacklistEvidenceModel = require('./models/BlacklistEvidence');
const BlacklistedUserModel = require('./models/BlacklistedUser');

const sequelize = new Sequelize(process.env.CONNECTION_URI);

const User = UserModel(sequelize, Sequelize);
const BlacklistEvidence = BlacklistEvidenceModel(sequelize, Sequelize);
const BlacklistedUser = BlacklistedUserModel(sequelize, Sequelize);

BlacklistEvidence.belongsTo(User);
User.hasMany(BlacklistEvidence);

BlacklistEvidence.belongsTo(BlacklistedUser);
BlacklistedUser.hasMany(BlacklistEvidence);

sequelize.sync()
    .then(() => {
        console.log(`Database & Tables created!`)
    });

module.exports={
    sequelize,
    User,
    BlacklistEvidence,
    BlacklistedUser
};
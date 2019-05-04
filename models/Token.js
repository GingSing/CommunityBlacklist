//_userid, token
module.exports = (sequelize, type) => {
    return sequelize.define('token', {
        _userId: { 
            type: type.String,
            allowNull: false
        },
        token: {
            type: type.String,
            allowNull: false
        }
    });
};
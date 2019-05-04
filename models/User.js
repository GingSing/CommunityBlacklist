// name, userName, ebayUserName, email, password, online, avatar, messageBox, verified
module.exports = (sequelize, type) => {
    return sequelize.define('user', {
        name: {
            type: type.STRING,
            allowNull: false
        },
        userName: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        ebayUserName: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        email: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: type.TEXT,
            allowNull: false
        },
        online: {
            type: type.BOOLEAN,
            defaultValue: false
        },
        avatar: {
            type: type.TEXT,
            defaultValue: ""
        },
        messageBox: {
            type: type.ARRAY(type.TEXT),
            defaultValue: []
        },
        verified: {
            type: type.BOOLEAN,
            defaultValue: false
        }
})};
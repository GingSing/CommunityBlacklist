
//TODO: Link BlackListedUser and Users

module.exports = (sequelize, type) => { 
    return sequelize.define('blacklistevidence',{
        ebayUserName: {
            type: type.STRING,
            allowNull: false,
            unique: true
        },
        description: {
            type: type.TEXT,
            allowNull: false
        },
        evidence: {
            type: type.ARRAY(type.TEXT),
            defaultValue: []
        },
        comments: {
            type: type.ARRAY(type.TEXT),
            defaultValue: []
        }
})};
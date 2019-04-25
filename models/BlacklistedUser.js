
//TODO: Link BlackListedUser and Users

module.exports = (sequelize, type) => { 
    return sequelize.define('blacklisteduser',{
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
        },
        votes: {
            type: type.INTEGER,
            defaultValue: 0
        },
        voters: {
            type: type.ARRAY(type.STRING),
            defaultValue: []
        }
})};
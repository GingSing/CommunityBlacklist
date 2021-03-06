
//TODO: Link BlackListedUser and Users

module.exports = (sequelize, type) => { 
    return sequelize.define('blacklisteduser',{
        ebayUserName: {
            type: type.STRING,
            allowNull: false,
            unique: true
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
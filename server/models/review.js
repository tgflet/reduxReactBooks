module.exports = (sequelize, type) => {
    return sequelize.define('review', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        content: type.TEXT,
        rating:type.INTEGER
    })
}
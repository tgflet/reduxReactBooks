module.exports = (sequelize, type) => {
    return sequelize.define('book', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        Title: type.STRING
    })
}
module.exports = (sequelize, type) => {
    return sequelize.define('author', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: type.STRING
    })
}
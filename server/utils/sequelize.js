const Sequelize = require('sequelize');
const UserModel = require('../models/user')
const BookModel = require('../models/book')
const ReviewModel = require('../models/review')
const AuthorModel = require('../models/author')

const sequelize = new Sequelize('booktalk', 'Catalyst', '',{
    host: 'localhost',
    dialect: 'postgres'
});

const User = UserModel(sequelize, Sequelize)
const Book = BookModel(sequelize, Sequelize)
const Review = ReviewModel(sequelize, Sequelize)
const Author = AuthorModel(sequelize, Sequelize)

Review.belongsTo(User);
Review.belongsTo(Book);
Book.belongsTo(Author);
Author.hasMany(Book);
Book.hasMany(Review);
User.hasMany(Review);

sequelize.sync({force: false})
    .then(()=> {
        console.log(`Database & tables created!`)
    })

sequelize.authenticate()
    .then(() =>{
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:',err);
    })
module.exports = {
    User,
    Book,
    Review,
    Author
}
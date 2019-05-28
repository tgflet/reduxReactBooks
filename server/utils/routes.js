const Authors = require("../controllers/authors");
const Books = require('../controllers/books');
const Users = require('../controllers/users');
const Reviews = require('../controllers/reviews');

module.exports = function(app){
    // Author Rest Commands
    app.get('/api/authors', Authors.getAll);
    app.get('/api/authors/:id', Authors.getOne);
    app.delete('/api/authors/:id',Authors.delete);
    app.post('/api/authors', Authors.create);

    // Book Rest Commands
    app.post('/api/books', Books.create);
    app.get('/api/books', Books.getAll);
    app.get('/api/books/:id', Books.getOne);
    app.delete('/api/books/:id', Books.delete);

    app.get('/api/books/author/:authorId', Books.getByAuthor);

    // User Rest Commands
    app.post('/api/users', Users.create);
    app.get('/api/users/:id', Users.getOne);
    app.delete('/api/users/:id', Users.delete);
    app.post('/api/users/signin', Users.verify);
    app.put('/api/users/:id', Users.update);

    // Review Rest Commands
    app.post('/api/reviews',Reviews.create);
    app.get('/api/reviews', Reviews.getAll);
    app.get('/api/reviews/:id', Reviews.getOne);
    app.delete('/api/reviews/:id', Reviews.delete);
    app.put('/api/reviews/:id', Reviews.update);

    app.get('/api/reviews/book/:bookId', Reviews.getByBook);
    app.get('/api/reviews/user/:userId', Reviews.getByUser);
    

}
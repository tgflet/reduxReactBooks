const{ Author, Book } = require('../utils/sequelize')

class Books{
    async create (req, res){
    const body = req.body
    const author = await Author.findOrCreate({where: {name: body.name}
    }).spread((author,created)=>author)
    body.authorId = author.id;
    Book.create(body)
    .then(book=>res.json(book))
    }
    getAll (req, res){
        Book.findAll().then(books => res.json(books))
    }
    getOne (req, res){
        Book.findOne({where: {id: req.params.id}})
        .then(book => res.json(book))
    }
    delete (req, res){
        Book.destroy({where: {id: req.params.id}})
        .then(res.json({status: "ok"}))
    }
    getByAuthor(req, res){
        Book.findAll({where: {authorId: req.params.authorId}})
        .then(books => res.json(books))
    }
}
module.exports = new Books();
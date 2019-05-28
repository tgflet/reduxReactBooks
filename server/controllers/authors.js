const{ Author } = require('../utils/sequelize')

class Authors{
    getAll(req, res){
        Author.findAll().then(authors => res.json(authors))
    }
    getOne(req, res){
        Author.findOne({where: {id: req.params.id}})
        .then(author => res.json(author))
    }
    delete(req, res){
        Author.destroy({where: {id: req.params.id}})
        .then(res.json({status: "ok"}))
    }
    create(req, res){
        Author.create(req.body)
        .then(author => res.json(author))
    }
}

module.exports = new Authors();
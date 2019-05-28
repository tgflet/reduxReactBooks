const {Review} = require('../utils/sequelize')

class Reviews{
    create(req,res){
        Review.create(req.body)
        .then(review => res.json(review))
    }
    getAll(req, res){
        Review.findAll().then(reviews => res.json(reviews))
    }
    getOne(req, res){
        Review.findOne({where: {id: req.params.id}})
        .then(review => res.json(review))
    }
    delete(req, res){
        Review.destroy({where: {id: req.params.id}})
        .then(res.json({status: "ok"}))
    }
    update(req, res){
        Review.update(req.body, {where: {id:req.params.id}})
        .then(res.json({status: 'ok'}))
    }

    getByBook(req, res){
        Review.findAll({where: {bookId: req.params.bookId}})
        .then(reviews => res.json(reviews))
    }
    getByUser(req, res){
        Review.findAll(req.body, {where: {userId: req.params.userId}})
        .then(reviews => res.json(reviews))
    }
}
module.exports = new Reviews();
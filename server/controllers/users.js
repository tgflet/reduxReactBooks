const{ User } = require('../utils/sequelize')
const bcrypt = require('bcrypt');

class Users{
    create(req, res){
        bcrypt.hash(req.body.password, 10, (err, hash)=>{
            if(err){
                console.log("I have error")
                return res.status(500).json({
                    error: err
                });
            }else{
                const newUser = {...req.body, password:hash};
                console.log(newUser)
                User.create(newUser)
                .then(user => res.json(user)) 
            }
        })
    }
    getOne(req, res){
        User.findOne({where: {id: req.params.id}})
        .then(user => res.json(user))
    }
    delete(req, res){
        User.destroy({where: {id: req.params.id}})
        .then(res.json({status: "ok"}))
    }
    update(req, res){
        User.update(req.body, {where: {id:req.params.id}})
        .then(res.json({status: 'ok'}))
    }
    async verify(req, res){
        const verified = await User.findOne({where: {email: req.body.email}})
    
        bcrypt.compare(req.body.password, verified.password, (err, result)=>{
            if(err){
                console.log('passwords do not match')
                return res.status(401).json({
                    failed: 'Unauthorized access'
                })
            }
            if (result){
                console.log('the passwords match')
                return res.status(200).json({
                    success: 'signin successful',
                    user: verified.userName
                })
            }
            return res.status(401).json({
                failed: 'Unauthorized access'
            })
        })
    }
}
module.exports = new Users();
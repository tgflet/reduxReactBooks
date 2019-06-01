const{ User } = require('../utils/sequelize')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const {SECRET} = require('../utils/config');
const {verifyToken} = require('../security/verify-token');

class Users{
    create(req, res){
        bcrypt.hash(req.body.password, 10, (err, hash)=>{
            if(err){
                console.log("I have error")
                return res.status(500).json({
                    error: err
                });
            }else{
                let newUser = {...req.body, password:hash};
                
                User.create(newUser)
                .then(user => {
                    const token = jwt.sign({id: user.id, user: user.userName},SECRET,
                        {expiresIn:86400})
                    console.log(user.id)
                    res.json({token, user} )
                })
                
                
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
                var token = jwt.sign({id: verified.id, user: verified.userName},SECRET,
                    {expiresIn:86400})
                return res.status(200).json({
                    success: 'signin successful',
                    user: verified.userName,
                    id: verified.id,
                    token : token
                })
            }
            return res.status(401).json({
                failed: 'Unauthorized access'
            })
        })
    }
    async profile(req, res){
        
        const result = await verifyToken(req.body)
        console.log(result)
        User.findOne({where: {id: result}})
        .then(user => res.json({
            user: user.userName,
            id: user.id
        }))
    }
}

        // const id = await verifyToken(req.body)
        // console.log(id)

            // User.findOne({where: {id: id}}, (err, user)=>{
            //     if(err){
            //         return res.status(500).json({
            //             message: "there was an issue finding the user"
            //         })
            //     }
            //     if(!user){
            //         return res.status(404).json({
            //             message: 'User not found'
            //         })
            //     }else{
            //         res.json({
            //             user: user.newUser,
            //             id: user.id
            //         })
            //     }
            // })    }}

module.exports = new Users();
const jwt = require('jsonwebtoken');
const {SECRET} = require('../utils/config');

const verifyToken = (req, res, next) => {
    

    var token = req.headers['x-access-token'];
    var user = '';
    if (!token){
        return res.status(403).json({
            auth: false,
            message: 'No token provided'
        })
    }
    jwt.verify(token, SECRET, (err, decoded)=>{
        if(err){
            console.log('There was an error')
            return res.status(500).json({
                auth: false,
                message: 'Failed to authenticate token'
            })
        }
        user = decoded.id
        console.log(`This is the id from the verify-token.js ${decoded.id}`)
        
        return user
        
    })
    return user;
}

module.exports = {verifyToken};
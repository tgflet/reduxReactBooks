const jwt = require('jsonwebtoken');
const {SECRET} = require('../utils/config');

const verifyToken = (req, res, next) => {
    console.log(req.headers)
    var token = req.headers['x-access-token'];
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
        console.log(decoded.id)
        req.userId = decoded.id
        next()
    })
}

module.exports = verifyToken;
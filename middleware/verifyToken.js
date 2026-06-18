const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).send({message : "unauthorizes access"});
    }

    const token = req.headers.authorization.split(' ')[1];
    // console.log("Received" , token);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
        if(err){
            return res.status(401).send({message : "token is invalid!"})
        }
        // console.log("decoded", decoded);
        req.decoded = decoded;
        next();
    })
   
}


module.exports = verifyToken;


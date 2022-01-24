const createUser = require('./../../modules/createUser')

module.exports=(req,res)=>{
    const {loginMethod, email, password, username} = req.body
    createUser({loginMethod,email,password,username})
    return res.status(201).send({response:'ok'})
}
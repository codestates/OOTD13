const createUser = require('./../../modules/createUser')
const requestTokenGit = require('./../../modules/requestTokenGit')
const requestUserInfoGit = require('./../../modules/requestUserInfoGit')

module.exports= async (req,res)=>{
    requestTokenGit(req.body.authorizationCode)
}
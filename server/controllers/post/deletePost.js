const deletePost=require('../../modules/deletePost');
const validateToken=require('../../modules/validateToken');
const findPost=require('../../modules/findPost');
const findUser=require('../../modules/findUser')

module.exports= async (req,res)=>{
    try {
        const loginMethod=req.query.loginMethod||0;
        const post=await findPost(req.query.id);
        const tokenInfo=await validateToken.validateToken(loginMethod,req.headers.authorization);
        const userInfo=await findUser({loginMethod:loginMethod,email:tokenInfo.email});
        if(post.user_id===userInfo.id){
            deletePost(req.query.id);
            res.status(204).send({response:'deleted'})
        }
        else res.status(401).send({response:'not authorized'})
    } catch {
        res.status(401).send({response:'not authorized'})
    }
}
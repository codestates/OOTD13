const findPost=require('./../../modules/findPost')

module.exports=async (req,res)=>{
    const postId=req.query.id;
    if(!postId){
        return res.status(400).send({response:'bad request'});
    }

    const post=await findPost(postId);
    
    if(!post){
        return res.status(404).send({response:'no post'});
    }
    
    return res.status(200).send({
        data:{
            content:{
                shirts:post.shirts,
                pants:post.pants,
                acc:post.acc,
                outer:post.outer,
                shoes:post.shoes
            }
        },
        response:'ok'
    })
}
const models=require('../models')

module.exports={
    deletePost: async (postId) =>{
        const article=await models.post.findOne({where:{id:postId}});
        models.article_tag.destroy({where:{article_id:postId}});
        models.content.destroy({where:{id:article.content_id}});
        models.article.destroy({where:{id:postId}});
    }
}
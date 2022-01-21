const models=require('../models')

module.exports={
    modifyPost: async (postId,imageSrc,{shirts,pants,acc,outer,shoes},{sex,weather,season,style})=>{
        const article=await models.post.findOne({where:{id:postId}});
        const user= await models.user.findOne({where:{id:article.user_id}})

        models.content.update({shirts,pants,acc,outer,shoes},{where:{id:article.content_id}});
        models.post.update({image_src:imageSrc});
        
        models.article_tag.destroy({where:{article_id:postId}});
        
        let tags=[];
        if(sex){
            const sexTag= await models.tag.findOne({where:{tag_num:sex}});
            tags.push(sexTag)
        }
        if(weather){
            const weatherTag= await models.tag.findOne({where:{tag_num:weather}});
            tags.push(weatherTag)
        }
        if(season){
            const seasonTag= await models.tag.findOne({where:{tag_num:season}});
            tags.push(seasonTag)
        }
        if(style){
            const styleTag= await models.tag.findOne({where:{tag_num:style}});
            tags.push(styleTag)
        }
        tags.forEach(tag=>{
            models.article_tag.create({
                article_id:article.id,
                tag_id:tag.Id
            })
        })

        return {
            post:{
                userId:article.user_id,
                username:user.username,
                imageSrc:imageSrc,
                like:article.like,
                view:article.like,
                postId:article.id,
                tag:tags.map((el)=>el.tag_name),
                createAt:article.createdAt
            },
            content:content
        }
    }
}
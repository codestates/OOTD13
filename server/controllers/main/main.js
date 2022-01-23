const models=require('../../models')

module.exports ={
    main: async (req,res) => {
        const order=req.query.order||'recent';
        const page=req.query.page||1;
        let articles=await models.article.findAll();
        
        if(req.query.sex){
            const tag= await models.tag.findOne({where:{tag_num:100+req.query.sex}});
            let articleIds=await models.article_tag.findAll({where:{tag_id:tag.dataValues.id}});
            articleIds=articleIds.map(el=>el.dataValues.article_id)
            articles=await Promise.all(articleIds.map(async(id)=>{
                return await models.article.findOne({where:{id:id}})
            }))
        }
        if(req.query.weather){
            const tag= await models.tag.findOne({where:{tag_num:200+req.query.weather}});
            let articleIds=await models.article_tag.findAll({where:{tag_id:tag.dataValues.id}});
            articleIds=articleIds.map(el=>el.dataValues.article_id)
            articles=await Promise.all(articleIds.map(async(id)=>{
                return await models.article.findOne({where:{id:id}})
            }))
        }
        if(req.query.season){
            const tag= await models.tag.findOne({where:{tag_num:300+req.query.season}});
            let articleIds=await models.article_tag.findAll({where:{tag_id:tag.dataValues.id}});
            articleIds=articleIds.map(el=>el.dataValues.article_id)
            articles=await Promise.all(articleIds.map(async(id)=>{
                return await models.article.findOne({where:{id:id}})
            }))
        }
        if(req.query.style){
            const tag= await models.tag.findOne({where:{tag_num:400+req.query.style}});
            let articleIds=await models.article_tag.findAll({where:{tag_id:tag.dataValues.id}});
            articleIds=articleIds.map(el=>el.dataValues.article_id)
            articles=await Promise.all(articleIds.map(async(id)=>{
                return await models.article.findOne({where:{id:id}})
            }))
        }

        const sorting={recent:'createdAt',popular:'view',like:'like',old:'createdAt'}
        articles.sort((a,b)=>{
            return a[sorting[req.query.order]]-b[sorting[req.query.order]];
        })
        if(order==='old'||order==='popular'||order==='like') articles.reverse();

        const result=articles.slice((page-1)*6,page*6);
        const realResult= await Promise.all(result.map(async (article)=>{
            let user=await models.user.findOne({where:{id:article.user_id}});
            user=user.dataValues;
            let tagId=await models.article_tag.findAll({where:{article_id:article.id}});
            tagId=tagId.map(el=>el.dataValues.tag_id)
            const tags= await Promise.all(tagId.map(async (id)=>{
                const tagName=await models.tag.findOne({where:{id:id}});
                return tagName.dataValues.tag_name;
            }))
            return {
                userId:article.user_id,
                username:user.username,
                imageSrc:article.image_src,
                like:article.like,
                view:article.view,
                postId:article.id,
                tag:tags,
                createdAt:article.createdAt
            }
        }))

        res.status(200).send({
            data:{
                post:realResult
            },
            response:'ok'
        })
    }
}
//서버 요청방식에 대한 논의 필요
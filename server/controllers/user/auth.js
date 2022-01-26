const { verify } = require("jsonwebtoken");
const validateToken = require("./../../modules/validateToken");
const {user} = require('./../../models')

module.exports = async (req, res) => {
  const auth = req.headers.cooke;
  if (!auth) {
    return null;
  }
  const token = auth.split(';')[0].split('=')[1];;
    const userInfo = await validateToken.validateToken("0", token);
    if (!userInfo) {
      return ;
    } else{
        const {email, username} = userInfo
        user.findOne({where: {email,username}})
        .then((data)=>{
            if(!data){
                return;
            } return res.json({data:{userInfo: data.dataValues}})
        })
        .catch((err)=>{
            console.log(err)
        })
    }
};

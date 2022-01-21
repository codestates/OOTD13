var express = require('express');
var router = express.Router();
var controllers=require('../controllers')


/* GET users listing. */
router.get('/logout',controllers.logOut);
router.post('/login',controllers.user.logIn);
router.post('/login/github',controllers.user.githubLogin);
router.post("/signup",controllers.user.singUp);
router.post('/emailcheck',controllers.user.emailCheck);
router.post('/namecheck',controllers.user.nameCheck);
router.delete('/withdrawal',controllers.user.withDrawal);

module.exports = router;

var express = require('express');
var router = express.Router();
var controllers=require('../controllers')


/* GET users listing. */
router.patch('/',controllers.password.password);

module.exports = router;

var express = require('express');
var router = express.Router();
var controllers=require('../controllers')

/* GET users listing. */
router.get('/',controllers.main.main);

module.exports = router;

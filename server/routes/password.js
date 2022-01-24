var express = require('express');
var router = express.Router();
var controllers=require('../controllers/password/password');


/* GET users listing. */
router.patch('/',controllers.password);

module.exports = router;
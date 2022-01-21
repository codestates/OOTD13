var express = require('express');
var router = express.Router();
var controllers=require('../controllers')


/* GET users listing. */
router.get('/', controllers.post.getPost);
router.post('/', controllers.post.postPost);
router.put('/', controllers.post.putPost);
router.delete('/', controllers.post.deletePost);

module.exports = router;

var express = require('express');
var router = express.Router();

router.post('/', function(req, res){
    res.send('test signup');
});

module.exports = router;
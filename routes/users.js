var express = require('express');
let session = require("express-session")

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  if(req.session.nodeAuth){
     res.render('users');
  }else{
    res.render("index");
  }

});

module.exports = router;

var express = require('express');
let session = require("express-session")

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  if(req.session.amos){
     res.render('err', { title: 'Login OUI' });
  }

  res.redirect("/login");

});

module.exports = router;

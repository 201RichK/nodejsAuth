var express = require('express');
let expressValidator = require('express-validator')


let db = require("../db")
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.amos){
    res.redirect('users');
  }else{
    res.render('index')
  }
});

/*
router.get('/log', function(req, res) {
  if(req.session.amos){
    res.render('error');
  }
  else{
    res.render('index')
  }
});
*/

router.post('/', (req, res) => {

})




module.exports = router;

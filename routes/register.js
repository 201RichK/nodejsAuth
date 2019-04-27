let express = require('express');
let expressValidator = require('express-validator');

let router = express.Router();



router.get('/', function(req, res, next) {
    console.log("je suis la")
    if(req.session.amos){
       res.render('err', { title: 'Login OUI' });
    }
  
    res.render("register");
  
});



module.exports = router;
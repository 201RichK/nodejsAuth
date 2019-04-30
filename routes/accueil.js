let express = require('express');
let expressValidator = require('express-validator');

let router = express.Router();



router.get('/', function(req, res, next) {
    res.render("accueil");
    //console.log("your root is (( /accueil ))")
   // if(req.session.amos){
       //res.render('err', { title: 'Login OUI' });
   // }
   // res.render('accueil')
 //   res.render("register");
  
});



module.exports = router;
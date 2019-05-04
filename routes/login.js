var express = require('express');
let expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator/check');
let bcrypt = require('bcrypt-nodejs');


let db = require("../config/db")
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  if(req.session.amos){
    res.redirect('/users');
  }
  res.redirect('/');

});

router.post('/',[check("email", "Email invalid").isEmail(), check("password").isLength({ min: 5 }) ], async (req, res) => {

    let error = validationResult(req);

    if (!error.isEmpty()) {
        console.log("il y a eu une erreur");
    }else{
      let email = req.body.email;
      let password = req.body.password;
      
        let data = [email];

        let db = require('../config/db')
        db.createConnection();


        let user = await db.verifyUser(data);
        if (user instanceof Error){
          console.log("erreur")
        }else {
          bcrypt.compare(password, user.password, (error, result) => {
            if(result){
              req.session.nodeAuth = user;
              console.log(req.session)
              res.redirect('/users');
            }
          })
        }
        
    }
})

module.exports = router;

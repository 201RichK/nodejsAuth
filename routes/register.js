let express = require('express');
let expressValidator = require('express-validator');
const { check, validationResult } = require('express-validator/check');
let bcrypt = require('bcrypt-nodejs');

let router = express.Router();

router.get('/', function(req, res, next) {
  res.render("register");
});

router.post("/", [check('email', "Entrer un mail valid").isEmail(), check('name', "le nom n'est pas valid").isLength({min:1, max:undefined}),
    check('password', "au moin 5 caracter").isLength({ min: 5 })], (req, res) => {
    console.log("formulaire soumis");

    const errors = validationResult(req);
    

    if (!errors.isEmpty()){
      // error = res.json({ errors: errors.array() });
      console.log(errors.array());
    }else{

      let bodyContent =  [];
      bodyContent.push(req.body.name, req.body.email, req.body.password);

      //hashing the user password
      bcrypt.hash(bodyContent[2], null, null, async (err, hash) => {

        bodyContent[2] = hash;
        if (err) throw err;

        let db = require('../config/db');
        db.createConnection();

        await db.insert(bodyContent, (result) => {
            console.log(result);
            res.render('index', {msg: "Votre compte a bien �t� creer!! merci de vous connecter"});
        });

      })

    }
});

module.exports = router;
let mysql = require('promise-mysql');

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'nodeAuth',
    //connectionLimit: 10
});

class  db {

    static createConnection() {
        connection.then(() => { console.log("connected ...!!") })
    }

    static insert (data, callback){

        return new Promise((next) => {
            connection.then((db) => {
                let user = db.query(`INSERT INTO users(name, email, password) VALUES(?, ?, ?)`, data)
                    .then((result) => next(result))
                    .catch((err) => next(err));
                callback(user);
            })
        })
    }

    static verifyUser(data){

        return new Promise((next) => {
            connection.then((db) => {
                db.query(`SELECT id, name FROM users WHERE email = ?`, data)
                    .then((result) => {
                        if(result[0] !== undefined){
                            db.query(`SELECT * FROM users WHERE id = ?`, [parseInt(result[0].id)])
                                .then((result) => {
                                    next(result[0]);
                                })
                                .catch((err) => next(new Error("Erreur ...")));
                        }else{
                            next(new Error("Verification echoué veuillez reprendre !!!"));
                        }
                    })
                    .catch((err) => next(new Error("Erreur ...")));
            })
        })
    }
}

module.exports = db;
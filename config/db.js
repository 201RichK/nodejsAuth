let mysql = require('mysql');

let connection = mysql.createConnection({
    host     : "localhost",
    user     : "root",
    password : "",
    database : "nodeAuth",
    port: null
});


class  db {

    static createConnection() {

        connection.connect((err, result) => {
            if (err) throw err;
            console.log('Connection a la Db reussi !!!!')
        });

    }

    static insert (data, cb){

        connection.query(`INSERT INTO users(name, email, password) VALUES(?, ?, ?)`, data, (err, result) => {
           // if (err) throw err;
            cb(result);
        });

    }
}

module.exports = db;
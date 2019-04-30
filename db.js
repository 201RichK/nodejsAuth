let mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'nodeauth',
//    port: 8889
})
connection.connect();

module.exports = connection;
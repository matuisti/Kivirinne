var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 100,
    host:'localhost',
    user:'',
    password:'',
    database:'',
    port: 3306,
    debug: false,
    multipleStatements: true,
    dateStrings: true,
});

module.exports.connection = connection;

//

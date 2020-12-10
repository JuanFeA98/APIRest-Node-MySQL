const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost', 
    user: 'user',
    password: 'password',
    database: 'series'
});

mysqlConnection.connect(function(err){
    if(err){
        console.log(err);
        return
    } else {
        console.log('La base de datos esta conectada')
    }
});

module.exports = mysqlConnection;
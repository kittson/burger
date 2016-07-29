var mysql = require('mysql');
var source = {
	localhost: {
		port: 3306,
		host: 'localhost',
		user: 'root',
		password: "Generic123",
		database: "burgers_db"
	},
	jawsDB: {
		port: 3306,
		host: 'l3855uft9zao23e2.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'jgotkr7oz6c79646',
		password: "taflo1z5erysozb0",
		database: "ain2m4556hkzmiym"

     }
  }

var connection = mysql.createConnection( source.jawsDB);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

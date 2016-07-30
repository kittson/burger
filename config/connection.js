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
		host: 'tviw6wn55xwxejwj.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
		user: 'yr662oy1nhckm3w8',
		password: "cmpdiqopwvtbo9hi",
		database: "ngmt7k8mqagcexzi"

     }
  }

//var connection = mysql.createConnection( source.jawsDB);
if(process.env.JAWSDB_URL){
	var connection = mysql.createConnection( process.env.JAWSDB_URL);
}
connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;

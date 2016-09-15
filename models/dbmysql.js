var mysql = require('mysql');
//database connection
var connection = mysql.createConnection({
	host	: 'localhost',
	user	:'root',
	password :'root',
	database : 'gambling',
	port : 3306
});

connection.connect(function(err){
if(!err) {
    console.log("Database is connected ... nn");    
} else {
    console.log("Database not connected..nn");    
}
});
// the file that will be used to establish a connection with the mysql database
var mysql = require("mysql");
require('dotenv').config();
var connection;

// establish a connection with the database
if (process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else {
connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "enph739ektA!",
    database: "burger_db"
});
}

// make a connection
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("connection as id: " + connection.threadId);
});

// export connection for our orm use.
module.exports = connection;
// the file that will be used to establish a connection with the mysql database
var mysql = require("mysql");

// establish a connection with the database
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "burger_db"
});

// make a connection
connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("connection as id: " + connection.threadId);
});

// export connection for our orm use.
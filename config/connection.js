var mysql = require("mysql");

var connection;


connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password: "p9yyexpz",
  // password: "",
  database: "burgers_db"
});

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;

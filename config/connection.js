var mysql = require("mysql");
require("dotenv").config();

var connection;

if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  }else{
connection = mysql.createConnection({
  host:  process.env.JAWSDB_HOST,
  user: process.env.JAWSDB_USERNAME,
  port: 3306,
  password: process.env.MYSQL_PASSWORD,
  database: 'uf0b7jv0gftw9b8v'
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});


module.exports = connection;
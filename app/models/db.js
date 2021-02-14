const mysql = require("mysql");
const dbConfig = require("../config/db.config");

// Create a connection to the database
const connection = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.DB
});

// open the MySQL connection
connection.connect(error => {
  if (error){
    console.log("error in connection");
     throw error;
    }

  console.log("Successfully connected to the database.");
});

module.exports = connection;
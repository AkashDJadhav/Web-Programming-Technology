const { query } = require("express");
var mysql = require("mysql");
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root123",
  database: "orders",
  port: "3306"
});

connection.connect((error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("database connected successfully");
  }
});

module.exports = connection;

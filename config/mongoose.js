/* Require mongoose and Connect it to database */
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/task_list_db");

/* the connection between controllers and Database */
const db = mongoose.connection;

/* Checking the connection to the Database */
db.on("error", console.error.bind(console, "Cannot able to Connect database"));
db.once("open", function () {
  console.log("Successfully Connected to Database");
});

/* Export it to Main File */
module.exports = db;

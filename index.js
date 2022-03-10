/* Require All File */
const express = require("express");
const port = 8000;
const app = express();

const db = require("./config/mongoose");

/* Set and Use Different Folders and Template Engin */
app.set("view engine", "ejs");
app.set("views", "./views");
app.use(express.urlencoded());
app.use(express.static("assests"));

/* Different Routes */
app.use("/", require("./routes"));

/* Checking Server is Running or Not  */
app.listen(port, function (err) {
  if (err) {
    console.log(`Error:${err}`);
    return;
  }
  console.log("Yup! My Server is runing at Port:", port);
});

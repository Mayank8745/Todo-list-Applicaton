/* Require Different File used to Communicate */
const express = require("express");
const router = express.Router();

/* Attached Different Routes to Bring Data and Send Data */
const homeController = require("../controllers/home_controller");

/* Checking Routes is Connected or Not */
console.log("Router is Connected Successfully");

/* Different Roots Path */
router.get("/", homeController.home);
router.post("/createItem", homeController.createItem);
router.get("/delete-item", homeController.delete);

/* Exports Routes to main File */
module.exports = router;

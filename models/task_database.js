/* Require mongoose */
const mongoose = require("mongoose");

/* Create Schema to Store Data and types of Data  */
const taskSchema = new mongoose.Schema({
  description: {
    type: "string",
    required: true,
  },
  category: {
    type: "string",
    required: true,
  },
  date: {
    type: "String",
    required: true,
  },
});

/* Name the Table */
const Task = mongoose.model("Task", taskSchema);

/* Exports to Main File */
module.exports = Task;

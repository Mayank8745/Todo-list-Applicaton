/* Used to Store Data and Delete the Data in Database */
const Task = require("../models/task_database");

/* Default Page Showing input of Data and already present data in Database */
module.exports.home = function (req, res) {
  Task.find({}, function (err, Task) {
    if (err) {
      console.log("Error in Fetching Task from Database");
      return;
    }
    return res.render("home", {
      title: "Todo Application",
      mainHeading: "TODO LIST",
      list: Task,
    });
  });
};

/* Link to Create Data and Store it in Database */
module.exports.createItem = function (req, res) {
  Task.create(
    {
      description: req.body.description,
      category: req.body.category,
      date: req.body.date,
    },
    function (err, newTask) {
      if (err) {
        console.log("Error in putting Task in Database");
        return;
      }
      return res.redirect("back");
    }
  );
};

/* Link to delete Data from Database */
module.exports.delete = function (req, res) {
  var id = req.query.id;
  Task.findByIdAndDelete(id, function (err) {
    if (err) {
      console.log("Error in deleting Data");
      return;
    }
    return res.redirect("back");
  });
};

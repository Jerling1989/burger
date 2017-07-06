//IMPORTING ORM
var orm = require("../config/orm.js");


var burger = {
  all: function(cb) {
    orm.all("burgers", function(response) {
      cb(response);
    });
  },
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(response) {
      cb(response);
    });
  },
  updateOne: function(devoured, condition, cb) {
    orm.updateOne("burgers", devoured, condition, function(response) {
      cb(response);
    });
  }
};

// Export the database functions for the controller (catsController.js).
module.exports = burger;

// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  // read/ select all the record in the database
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },

  create: function(cols, vals, cb) {
    // create/insert a new record to the database
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    // update a specfic record in the database
    orm.update("burgers", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    // delete a specific record in the database
    orm.delete("burgers", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = burger;

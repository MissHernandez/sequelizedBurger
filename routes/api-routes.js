
var db = require("../models");


module.exports = function(app) {

  // GET route for getting and showing all the burgers.
  app.get("/", function(req, res) {
    db.burger.findAll({}).then(function(dbBurger) {
      var hbsObject = {burgers: dbBurger};
      console.log(dbBurger);
    res.render("index", hbsObject);
    });

  });

  // POST route to take user input and create a new burger to be devoured.
  app.post("/", function(req, res) {
    db.burger.create({
      burger_name: req.body.name
    }).then(function(dbBurger) {
      res.redirect("/");
    });
  });

  // UPDATE route for changing burgers from "not devoured" to "devoured."
  app.put("/:id", function(req, res) {
    console.log(res);
    db.burger.update({
      devoured: req.body.devoured
    }, {
      where: {
        id: req.params.id
      }
    }).then(function(dbBurger) {
      res.redirect("/");
    });
  });

};

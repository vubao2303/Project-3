// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const { Router } = require("express");


// Listing out needed routes: (ignoring login for now)
//      get all yearbooks
//      get all yearbooks associated with a year
//      get get ALL data associated with a specific yearbook
//      
//      create a yearbook
//      update basic yearbook data

//      create a class
//      update a class

//      create a person
//      update a person

module.exports = function (app) {
  // Using the passport.authenticate middleware with our local strategy.
  // If the user has valid login credentials, send them to the members page.
  // Otherwise the user will be sent an error
  app.post("/api/login", passport.authenticate("local"), function (req, res) {
    res.json(req.user);
  });

  // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
  // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
  // otherwise send back an error
  app.post("/api/signup", function (req, res) {
    db.User.create({
      username: req.body.username,
      password: req.body.password
    })
      .then(function () {
        res.redirect(307, "/api/login");
      })
      .catch(function (err) {
        res.status(401).json(err);
      });
  });



  // Route for logging user out
  app.get("/logout", function (req, res) {
    req.logout();
    res.redirect("/login");
  });

  // Route for getting some data about our user to be used client side
  app.get("/api/user_data", function (req, res) {
    if (!req.user) {
      // The user is not logged in, send back an empty object
      res.json({});
    } else {
      // Otherwise send back the user's email and id
      // Sending back a password, even a hashed password, isn't a good idea
      res.json({
        username: req.user.username,
        id: req.user.id
      });
    }
    // getUserCharacter(req);
  });

  app.get("/api/scenario/:id", function (req, res) {
    db.Location.findOne({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });

  app.get("/api/start", function (req, res) {
    // find character belonging to user id
    db.Character.findAll({ where: { UserId: req.user.id } }).then(function (data) {
      // if there are none or if the most recent one is dead
      if (data[0] == null || data[data.length - 1].death_message !== null) {
        // create one
        db.Character.create({
          UserId: req.user.id,
          description: "This character is you, dummy. They possess all of your virtues, and more importantly your vices."
          // then search again and return its data
        }).then(function () {
          db.Character.findAll({ where: { UserId: req.user.id } }).then(function (data) {
            res.json(data[data.length-1]);
          });
        });
      }
      else (res.json(data[data.length-1]));
    });
  });

  app.get("/api/restart", function (req, res) {
    db.Character.create({
      UserId: req.user.id,
      description: "This character is you, dummy. They possess all of your virtues, and more importantly your vices."
    });
  });

  // finds all options of a location id
  app.get("/api/options/:id", function (req, res) {
    db.Option.findAll({ where: { LocationId: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });

  // finds one id by its id
  app.get("/api/option/:id", function (req, res) {
    db.Option.findOne({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });

  // gets item by id
  app.get("/api/item/:id", function (req, res) {
    console.log(req.params.id);
    db.Item.findOne({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });

  // put an item into a users inventory
  app.post("/api/additem", function(req, res) {
    db.Inventory.create({
      ItemId: req.body.itemid,
      CharacterId: req.body.characterid
    }).then(function() {
      res.json(null);
    });
  });

  // gets all item ids of a specific character in inventory
  app.get("/api/inventory/:id", function (req, res) {
    db.Inventory.findAll({ where: { CharacterId: req.params.id } }).then(function (data) {
      // console.log(data);
      res.json(data);
    });
  });

  // update character stats and location based on character id
  app.put("/api/update/character", function (req, res) {
    // Use the sequelize update method to update a todo to be equal to the value of req.body
    // req.body will contain the id of the todo we need to update
    db.Character.update(
      { strength: req.body.newStr, intelligence: req.body.newInt, dexterity: req.body.newDex, LocationId: req.body.newLoc },
      { where: { id: req.body.id } }
    );
    res.json(null);
  });

  // update character stats and location based on character id
  app.put("/api/kill/character", function (req, res) {
    // Use the sequelize update method to update a todo to be equal to the value of req.body
    // req.body will contain the id of the todo we need to update
    db.Character.update(
      { death_message: req.body.death_message },
      { where: { id: req.body.id } }
    );
    res.json(null);
  });

  // get character by id
  app.get("/api/characters/:id", function (req, res) {
    db.Character.findOne({ where: { id: req.params.id } }).then(function (data) {
      res.json(data);
    });
  });
};

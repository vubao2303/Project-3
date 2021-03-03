<<<<<<< HEAD
// Pseudo Code
// API Routes
// Information we want to get: 
// Display Name, Nickname, Picture, Quotes, Hobbies, Linkedin, Title
// Route name - /name, /nick, /pic /quote /hobbies /linked /title 
// < href = /name /> 
// 
=======
// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");
const { Router } = require("express");

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
    });

    // Listing out needed routes: (ignoring login for now)
    //      get all yearbooks

    app.get("/api/yearbooks/", function (req, res) {
        db.Yearbooks.findAll().then(function (data) {
            res.json(data);
        });
    });

    //      get all yearbooks associated with a year

    app.get("/api/yearbooksyear/:year", function (req, res) {
        db.Yearbooks.findAll({ where: { year: req.params.year } }).then(function (data) {
            res.json(data);
        });
    });

    //      get all yearbooks associated with a specific user

    app.get("/api/yearbookscreator/:id", function (req, res) {
        db.Yearbooks.findAll({ where: { UserId: req.params.id } }).then(function (data) {
            res.json(data);
        });
    });

    //      get a yearbook by its id

    app.get("/api/yearbooksid/:id", function (req, res) {
        db.Yearbooks.findOne({ where: { id: req.params.id } }).then(function (data) {
            res.json(data);
        });
    });

    //      get ALL data associated with a specific yearbook (above gets a specific yearbook by id)
    //          get all classes associated with a yearbook
    //              get all people associated with a class

    app.get("/api/classes/:id", function (req, res) {
        db.Classes.findAll({ where: { YearbookId: req.params.id } }).then(function (data) {
            res.json(data);
        });
    });

    app.get("/api/students/:id", function (req, res) {
        db.Students.findAll({ where: { ClassId: req.params.id } }).then(function (data) {
            res.json(data);
        });
    });


    //      
    //      create a yearbook (of a user)

    app.post("/api/newBook", function (req, res) {
        db.Yearbooks.create({
            schoolName: req.body.name,
            numberOfClasses: req.body.number,
            year: req.body.year,
            UserId: req.body.user
        }).then(function () {
            res.json(null);
        });
    });


    //      update basic yearbook data

    app.put("/api/update/book", function (req, res) {
        // Use the sequelize update method to update a todo to be equal to the value of req.body
        // req.body will contain the id of the yearbook we need to update
        db.Yearbook.update(
            {
                schoolName: req.body.name,
                numberOfClasses: req.body.number,
                year: req.body.year,
                UserId: req.body.user
            },
            { where: { id: req.body.id } }
        );
        res.json(null);
    });

    //      create a class (in a yearbook)

    app.post("/api/newClass", function (req, res) {
        db.Classes.create({
            className: req.body.name,
            gradeLevel: req.body.grade,
            YearbookId: req.body.id
        }).then(function () {
            res.json(null);
        });
    });

    //      update a class

    app.put("/api/update/class", function (req, res) {
        // Use the sequelize update method to update a todo to be equal to the value of req.body
        // req.body will contain the id of the yearbook we need to update
        db.Class.update(
            {
                className: req.body.name,
                gradeLevel: req.body.grade,
                YearbookId: req.body.id
            },
            { where: { id: req.body.id } }
        );
        res.json(null);
    });

    //      create a person (in a class) 

    app.post("/api/newPerson", function (req, res) {
        db.Students.create({
            name: req.body.name,
            nickname: req.body.nickname,
            hobbies: req.body.hobbies,
            quote: req.body.quote,
            linkedIn: req.body.linkedin,
            title: req.body.title,
            ClassId: req.body.class
        }).then(function () {
            res.json(null);
        });
    });

    //      update a person

    app.put("/api/update/person", function (req, res) {
        // Use the sequelize update method to update a todo to be equal to the value of req.body
        // req.body will contain the id of the yearbook we need to update
        db.Class.update(
            {
                name: req.body.name,
                nickname: req.body.nickname,
                hobbies: req.body.hobbies,
                quote: req.body.quote,
                linkedIn: req.body.linkedin,
                title: req.body.title,
                ClassId: req.body.class
            },
            { where: { id: req.body.id } }
        );
        res.json(null);
    });


};
>>>>>>> 5266e00959c2b35699cfe95cac950a3d0d9f01b9

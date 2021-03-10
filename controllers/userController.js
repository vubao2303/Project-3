const db = require("../models");
var passport = require("../config/passport");
var bcrypt = require("bcryptjs");

// Defining methods for the user controller
module.exports = {
    login: function (req, res) {
        // console.log(res)
        console.log(req.body.username);
        db.User.findOne({ where: { username: req.body.username } })
            .then(user => {
                // send user id back to client
                bcrypt.compare(req.body.password, user.password).then((result) => {
                    if (result == true) {
                        res.json(user.id);
                    }
                    else {
                        res.send("wrong");
                    }
                })
                // res.json(user.id);
            }).catch(err => {
                // error
                console.log(err);
                // send a false statement for client to handle error
                res.send(false);
            })
    },
    signup: function (req, res) {
        console.log("got to controller");
        db.User.create(req.body)
            .then(() => {
                res.json(true);
                // res.redirect(307, "/api/login");
            })
            .catch((err) => {
                // res.status(401).json(err);
                res.json(false);
            });
    },
    logout: function (req, res) {
        req.logout();
        res.redirect("/login");
    },


    getUserById: function (req, res) {
        db.User.findOne({ where: { id: req.params.id } })
            .then((user) => {
                res.json(user);
                // res.redirect(307, "/api/login");
            })
            .catch((err) => {
                // res.status(401).json(err);
                res.json(err);
            });
    },

    getUserData: function (req, res) {
        if (!req.user) {
            console.log("banana")
            // The user is not logged in, send back an empty object
            res.json({});
        } else {
            console.log("apple")
            // Otherwise send back the user's email and id
            // Sending back a password, even a hashed password, isn't a good idea
            res.json({
                username: req.user.username,
                id: req.user.id
            });
        }
    }
};
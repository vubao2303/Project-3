const db = require("../models");
var passport = require("../config/passport");

// Defining methods for the user controller
module.exports = {
    login: function (req, res) {
        res.json(req.user);
    },
    signup: function (req, res) {
        db.User.create(req.body)
            .then(function () {
                res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                res.status(401).json(err);
            });
    },
    logout: function (req, res) {
        req.logout();
        res.redirect("/login");
    },
    getUserData: function (req, res) {
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
    }
};
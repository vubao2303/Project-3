const db = require("../models");
var passport = require("../config/passport");

// Defining methods for the user controller
module.exports = {
    login: function (req, res) {
        // console.log(req.user);
        // res.json(req.user);
        // we need to check here for password if it is there already
        passport.authenticate('local', function (err, user, info) {
            console.log(user);
            if (!user) { return res.redirect('/login'); }
            req.logIn(user, function (err) {
                if (err) { return next(err); }
                return res.redirect('/');
            });
        })(req, res);

    },
    signup: function (req, res) {
        console.log("got to controller");
        db.User.create(req.body)
            .then(function () {
                res.json(true);
                // res.redirect(307, "/api/login");
            })
            .catch(function (err) {
                // res.status(401).json(err);
                res.json(false);
            });
    },
    logout: function (req, res) {
        req.logout();
        res.redirect("/login");
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
        } g
    }
};
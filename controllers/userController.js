const db = require("../models");
var passport = require("../config/passport");

// Defining methods for the user controller
module.exports = {
    login: function (req, res) {
        // console.log(res)
        db.User.findOne({ where: req.body })
            .then(user => {
                // send user id back to client
                res.json(user.id);
            }).catch(err => {
                // error
                console.log(err);
                // send a false statement for client to handle error
                res.send(false);
            })
        // res.json(req.user);
        // // req.body.user maybe 
        // // user is validate and compare your password 
        // // we need to check here for password if it is there already
        // // another if user call to database (req.user. username) 
        // if (req.user.password) {
        //     db.User.validPassword
        //     // pass in the password for the found user, 
        // }
        // then we can return a message say yes status 200

    },
    signup: function (req, res) {
        console.log("got to controller");
        db.User.create(req.body)
            .then(() => {
                res.json(true);
                // res.redirect(307, "/api/login");
            })
            .catch( (err) =>  {
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
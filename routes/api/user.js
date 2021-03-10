const router = require("express").Router();
const userController = require("../../controllers/userController.js");
var passport = require("../../config/passport");

// Matches with "/api/users/login"
router
    .route("/login")
    // .post(passport.authenticate("local"), userController.login)
    // b trying
    .put(userController.login)


// Matches with "/api/users/signup"
router
    .route("/signup")
    .post(userController.signup);

// Matches with "/api/users/logout"
router
    .route("/logout")
    .get(userController.logout);

// Matches with "/api/users/logout"
router
    .route("/:id")
    .get(userController.getUserById);

// Matches with "/api/users/user_data"
router
    .route("/user_data")
    .get(userController.getUserData);

module.exports = router;

const router = require("express").Router();
const studentController = require("../../controllers/studentController.js");

// Matches with "/api/student"
router
    .route("/")
    .post(studentController.create);

// Matches with "/api/classes/:id"
router
    .route("/:id")
    .get(studentController.findById)
    .put(studentController.update);

// Matches with "/api/classes/:id"
router
    .route("/class/:class")
    .get(studentController.findByClass);

module.exports = router;
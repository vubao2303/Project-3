const router = require("express").Router();
const classController = require("../../controllers/classController.js");

// Matches with "/api/classes"
router
    .route("/")
    .post(classController.create);

// Matches with "/api/classes/:id"
router
    .route("/:id")
    .get(classController.findById)
    .put(classController.update);

// Matches with "/api/classes/book/:book"
router
    .route("/book/:book")
    .get(classController.findByBook);

module.exports = router;
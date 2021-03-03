const router = require("express").Router();
const yearbookController = require("../../controllers/yearbookController");

// Matches with "/api/books"
router
    .route("/")
    .get(yearbookController.findAll)
    .post(yearbookController.create);

// Matches with "/api/books/:id"
router
    .route("/:id")
    .get(yearbookController.findById)
    .put(yearbookController.update)
    .delete(yearbookController.remove);

// Matches with "/api/books/year/:year"
router
    .route("/year/:year")
    .get(yearbookController.findByYear);

// Matches with "/api/books/user/:user"
router
    .route("/user/:user")
    .get(yearbookController.findByUser);

module.exports = router;

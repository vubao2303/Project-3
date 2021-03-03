const router = require("express").Router();
const yearbookController = require("../../controllers/yearbookController");

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

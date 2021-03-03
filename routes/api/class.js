const router = require("express").Router();
const classController = require("../../controllers/classController.js");

//      get ALL data associated with a specific yearbook (above gets a specific yearbook by id)
//          get all classes associated with a yearbook

app.get("/api/classes/:id", function (req, res) {
    db.Classes.findAll({ where: { YearbookId: req.params.id } }).then(function (data) {
        res.json(data);
    });
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

// Matches with "/api/classes"
router
    .route("/")
    .post(classController.create);

// Matches with "/api/classes/:id"
router
    .route("/:id")
    .get(classController.findById)
    .put(classController.update);

module.exports = router;
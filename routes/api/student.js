const router = require("express").Router();
const studentController = require("../../controllers/studentController.js");

// find person by id

app.get("/api/students/:id", function (req, res) {
    db.Students.findAll({ where: { ClassId: req.params.id } }).then(function (data) {
        res.json(data);
    });
});

// create a person (in a class) 
app.post("/api/newPerson", function (req, res) {
    db.Students.create({
        name: req.body.name,
        nickname: req.body.nickname,
        hobbies: req.body.hobbies,
        quote: req.body.quote,
        linkedIn: req.body.linkedin,
        title: req.body.title,
        ClassId: req.body.class
    }).then(function () {
        res.json(null);
    });
});

// update a person

app.put("/api/update/person", function (req, res) {
    // Use the sequelize update method to update a todo to be equal to the value of req.body
    // req.body will contain the id of the yearbook we need to update
    db.Class.update(
        {
            name: req.body.name,
            nickname: req.body.nickname,
            hobbies: req.body.hobbies,
            quote: req.body.quote,
            linkedIn: req.body.linkedin,
            title: req.body.title,
            ClassId: req.body.class
        },
        { where: { id: req.body.id } }
    );
    res.json(null);
});
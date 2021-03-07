const db = require("../models");

// Defining methods for the yearbook controller
module.exports = {
    create: function (req, res) {
        db.Student.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Student.findOne({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByClass: function (req, res) {
        db.Student.findAll({ where: { ClassId: req.params.class } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Student.update(req.body, { where: { id: req.body.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
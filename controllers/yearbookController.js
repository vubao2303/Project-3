const db = require("../models");

// Defining methods for the yearbook controller
module.exports = {
    findAll: function (req, res) {
        db.Yearbook.findAll(req.query)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Yearbook.findOne({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByYear: function (req, res) {
        db.Yearbook.findAll({ where: { year: req.params.year } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByUser: function (req, res) {
        db.Yearbook.findAll({ where: { UserId: req.params.user } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Yearbook.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Yearbook.update(req.body, { where: { id: req.body.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Yearbook.destroy({ where: { id: req.params.id } })
            // .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
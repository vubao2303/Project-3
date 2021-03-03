const db = require("../models");

// Defining methods for the yearbook controller
module.exports = {
    create: function (req, res) {
        db.Class.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Class.findOne({ where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByBook: function (req, res) {
        db.Class.findOne({ where: { YearbookId: req.params.book } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Class.update(req.body, { where: { id: req.body.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};
const router = require("express").Router();
const bookRoutes = require("./yearbook");
const classRoutes = require("./class");
const studentRoutes = require("./student");
const userRoutes = require("./user");

// Yearbook routes
router.use("/books", bookRoutes);

// Class routes
router.use("/classes", classRoutes);

// Student Routes
router.use("/student", studentRoutes);

// User Routes
router.use("/users", userRoutes);

module.exports = router;
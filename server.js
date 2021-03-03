// Requiring necessary npm packages
var express = require("express");
var session = require("express-session");
// Requiring passport as we've configured it
var passport = require("./config/passport");
var path = require("path");
var routes = require("./routes");


// Setting up port and requiring models for syncing
var PORT = process.env.PORT || 3001;
var db = require("./models");

// Creating express app and configuring middleware needed for authentication
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// ?you can just use this routes  folder ? it is
// ?same as 34 ?? 
app.use(routes);

// We need to use sessions to keep track of our user's login status
// app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(passport.initialize());
// app.use(passport.session());



// 2 ways:one is function base and one is not 
// require("./routes/index.js")(app);

app.get("*", (req, res) => {
  // react not set up, uncomment when we have this file/folder
  // res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

// Syncing our database and logging a message to the user upon success
db.sequelize.sync().then(function () {
  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});

// 
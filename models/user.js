// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
// var bcrypt = require("bcryptjs");

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        username: { type: DataTypes.STRING, unique: true },
        email: { type: DataTypes.STRING, unique: true, validate: { isEmail: true } },
        password: { type: DataTypes.STRING }
    });

    // add association
    User.associate = function (models) {
        User.hasMany(models.Yearbook, {

        });
    }

    // this is for user authentication/ make sure that that no repeated user is logged in 
    // User.prototype.validPassword = function (password, userpass) {
    //     // call this validPassword, in where you call for the login
    //     return bcrypt.compareSync(password, userpass);
    // };
    // // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // // In this case, before a User is created, we will automatically hash their password
    // User.addHook("beforeCreate", function (user) {
    //     user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    // });

    return User;
}

// user id in local storage, once you log out you want to clear the local storage as well 


// if already a user then 
// before make a create/sighup  button, use a findone to make sure that user is there or not 
// if user already there, then login, 
// bcrypt is once you change a password you can't change it
// so if you want to retrieve, you can't 

// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
var bcrypt = require("bcryptjs");

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
    User.prototype.validPassword = function (password) {
        return bcrypt.compareSync(password, this.password);
    };
    // Hooks are automatic methods that run during various phases of the User Model lifecycle
    // In this case, before a User is created, we will automatically hash their password
    User.addHook("beforeCreate", function (user) {
        user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
    });

    return User;
}
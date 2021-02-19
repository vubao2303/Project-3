module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
     username: {type: DataTypes.STRING},
     email: {type: DataTypes.STRING, unique: true, validate: {isEmail: true}},
     password: {type: DataTypes.STRING}
    });
    
    return User;
}
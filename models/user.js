module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
     username: {type: DataTypes.STRING},
     email: {type: DataTypes.STRING, unique: true, validate: {isEmail: true}},
     password: {type: DataTypes.STRING}
    });
    
    return user;
}
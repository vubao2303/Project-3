module.exports = function(sequelize, DataTypes) {
    var user = sequelize.define("user", {
     username: {type: DataTypes.STRING},
     email: {type: DataTypes.STRING, unique: true},
     password: {type: DataTypes.STRING}
    });
    
    return user;
}
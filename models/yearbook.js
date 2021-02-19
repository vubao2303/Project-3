module.exports = function(sequelize, DataTypes) {
    var Yearbook = sequelize.define("Yearbook", {
     schoolName: {type: DataTypes.STRING},
     numberOfClasses: {type: DataTypes.INTEGER},
     year: {type: DataTypes.INTEGER}
    });
    
    return Yearbook;
}
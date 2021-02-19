module.exports = function(sequelize, DataTypes) {
    var Class = sequelize.define("Class", {
    className: {type: DataTypes.STRING},
    gradeLevel: {type: DataTypes.STRING}
    });
    
    return Class;
}
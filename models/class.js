module.exports = function(sequelize, DataTypes) {
    var class = sequelize.define("class", {
    className: {type: DataTypes.STRING},
    gradeLevel: {type: DataTypes.STRING}
    });
    
    return class;
}
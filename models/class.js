module.exports = function(sequelize, DataTypes) {
    var Class = sequelize.define("Class", {
    className: {type: DataTypes.STRING},
    gradeLevel: {type: DataTypes.STRING}
    });
    
    // add association 
    Class.associate = function(models) {
        Class.belongsTo(models.Yearbook, {

        });

        Class.hasMany(models.Student, {

        });
    
    }

    return Class;
}
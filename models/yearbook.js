module.exports = function (sequelize, DataTypes) {
    var Yearbook = sequelize.define("Yearbook", {
        schoolName: { type: DataTypes.STRING },
        year: { type: DataTypes.INTEGER }
    });

    // add yearbook
    Yearbook.associate = function (models) {
        Yearbook.hasMany(models.Class, {

        });
        Yearbook.belongsTo(models.User, {
        });
    }

    return Yearbook;
}
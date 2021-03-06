module.exports = function (sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
        name: { type: DataTypes.STRING },
        nickname: { type: DataTypes.STRING },
        hobbies: { type: DataTypes.STRING },
        quote: { type: DataTypes.STRING },
        linkedIn: { type: DataTypes.STRING },
        title: { type: DataTypes.STRING },
        image: {type: DataTypes.STRING(512)}
    });

    //add student association 
    Student.associate = function (models) {
        Student.belongsTo(models.Class, {
        });
    }
    return Student;
}
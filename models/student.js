module.exports = function(sequelize, DataTypes) {
    var Student = sequelize.define("Student", {
     name: {type: DataTypes.STRING},
     nickname: {type: DataTypes.STRING, unique: true, validate: {isEmail: true}},
     hobbies: {type: DataTypes.STRING},
     quote: {type: DataTypes.STRING},
     linkedIn: {type: DataTypes.STRING},
     title: {type: DataTypes.STRING}
    });

    //add student association 
    Student.associate = function(models) {
        Student.belongsTo(models.Class, {

        });
    }

    return Student;
}
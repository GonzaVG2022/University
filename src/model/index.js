const Course = require("./Course");
const Professor = require("./Professor");
const Student = require("./Student");

Professor.belongsToMany(Student, { through: "ProfessorStudents"});
Student.belongsToMany(Professor, { through: "ProfessorStudents"});

Course.belongsToMany(Student, { through: "CoursesStudents"});
Student.belongsToMany(Course, { through: "CoursesStudents"});
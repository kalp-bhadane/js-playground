const fs = require("fs");

const students = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/students.json`, "utf-8")
);

exports.getAllStudents = (req, res) => {
  const result = {
    count: students.length,
    students,
  };
  res.status(200).send(result);
};

exports.getStudent = (req, res) => {
  const student = students.find((student) => student.id == req.params.id);
  res.send(student);
};

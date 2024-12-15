const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());

const users = JSON.parse(fs.readFileSync("./../data/users.json", "utf-8"));
const students = JSON.parse(
  fs.readFileSync("./../data/students.json", "utf-8")
);

const getAllUsers = (req, res) => {
  const result = {
    count: users.length,
    users,
  };
  res.status(200).send(result);
};

const getUser = (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  res.send(user);
};

const createUser = (req, res) => {
  const user = Object.assign(req.body, { id: users.length + 1 });
  users.push(user);
  fs.writeFile("./../data/users.json", JSON.stringify(users), (err) => {
    res.status(201).send(user);
  });
};

const deleteUser = (req, res) => {
  const usersAfterDelete = users.filter((user) => user.id != req.params.id);
  fs.writeFile(
    "./../data/users.json",
    JSON.stringify(usersAfterDelete),
    (err) => {
      res.status(201).send("Deleted");
    }
  );
};

const getAllStudents = (req, res) => {
  const result = {
    count: students.length,
    students,
  };
  res.status(200).send(result);
};

const getStudent = (req, res) => {
  const student = students.find((student) => student.id == req.params.id);
  res.send(student);
};

/** Way 1
//users
app.route("/users").get(getAllUsers).post(createUser);
app.route("/users/:id").get(getUser).delete(deleteUser);
//students
app.route("/students").get(getAllStudents);
app.route("/students/:id").get(getStudent);
*/

// Way 2
const userRouter = express.Router();
app.use("/users", userRouter);

userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).delete(deleteUser);

const studentRouter = express.Router();
app.use("/students", studentRouter);

studentRouter.route("/").get(getAllStudents);
studentRouter.route("/:id").get(getStudent);

const port = 3000;
app.listen(port, () => {
  console.log(`app2.js => listening on port: ${port}...`);
});

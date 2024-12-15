const express = require("express");
const {
  getAllStudents,
  getStudent,
} = require("../controllers/studentController");

const studentRouter = express.Router();

studentRouter.route("/").get(getAllStudents);
studentRouter.route("/:id").get(getStudent);

module.exports = studentRouter;

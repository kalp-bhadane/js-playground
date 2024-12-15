const express = require("express");
const {
  getAllUsers,
  createUser,
  getUser,
  deleteUser,
} = require("../controllers/userController");

const userRouter = express.Router();
userRouter.route("/").get(getAllUsers).post(createUser);
userRouter.route("/:id").get(getUser).delete(deleteUser);

module.exports = userRouter;

/**
 * middleware
 * userRouter.route("/").get(getAllUsers).post(middleware, createUser);
 * middleware = (req, res, next) => {
 *   -----
 *  next()
 * }
 */

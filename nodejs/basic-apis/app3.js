const express = require("express");
const userRouter = require("./routes/userRoutes");
const studentRouter = require("./routes/studentRoutes");

// seperate route modules

const app = express();
app.use(express.json());

app.use("/users", userRouter);
app.use("/students", studentRouter);

const port = 3000;
app.listen(port, () => {
  console.log(`app3.js => listening on port: ${port}...`);
});

const express = require("express");
const fs = require("fs");

const app = express();

//middleware - always executes in order

// use to add body from URL to req
app.use(express.json());

// custom middleware
app.use((req, res, next) => {
  console.log("Hello from custom middleware");
  next();
});

const users = JSON.parse(fs.readFileSync("./../data/users.json", "utf-8"));

const getAllUsers = (req, res) => {
  const result = {
    count: users.length,
    records: users,
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

app.get("/users", getAllUsers);

app.get("/users/:id", getUser);

app.post("/users", createUser);

app.delete("/users/:id", deleteUser);

const port = 3000;
app.listen(port, () => {
  console.log(`app1.js => listening on port: ${port}...`);
});

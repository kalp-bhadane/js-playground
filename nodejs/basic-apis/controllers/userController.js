const fs = require("fs");

const users = JSON.parse(
  fs.readFileSync(`${__dirname}/../../data/users.json`, "utf-8")
);
exports.getAllUsers = (req, res) => {
  const result = {
    count: users.length,
    users,
  };
  res.status(200).send(result);
};

exports.getUser = (req, res) => {
  const user = users.find((user) => user.id == req.params.id);
  res.send(user);
};

exports.createUser = (req, res) => {
  const user = Object.assign(req.body, { id: users.length + 1 });
  users.push(user);
  fs.writeFile(
    `${__dirname}/../../data/users.json`,
    JSON.stringify(users),
    (err) => {
      res.status(201).send(user);
    }
  );
};

exports.deleteUser = (req, res) => {
  const usersAfterDelete = users.filter((user) => user.id != req.params.id);
  fs.writeFile(
    `${__dirname}/../../data/users.json`,
    JSON.stringify(usersAfterDelete),
    (err) => {
      res.status(201).send("Deleted");
    }
  );
};

const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const path = req.url;
  if (path == "/home" || path == "/") {
    res.end("This is Home");
  } else if (path == "/overview") {
    res.end("This is Overview");
  } else if (path == "/htmlContent") {
    res.writeHead(200, {
      "Content-Type": "text/html",
    });
    res.end("<h1>This is HTML content</h1>");
  } else if (path == "/api") {
    fs.readFile("./../data/users.json", "utf-8", (err, data) => {
      res.writeHead(200, {
        "content-type": "application/json",
      });
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end("Page not found!");
  }
});

const port = 3000;
server.listen(port, "127.0.0.1", () => {
  console.log(`app-index.js => listening on port: ${port}...`);
});

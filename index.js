const express = require("express");
const app = express();
const port = 4200;

app.get("/", (requiest, response) => {
  response.send("Hello from express");
});

app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }
});

const app = require("express")();
const port = 4200;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/test", (req, res) => {
  console.log(req);
  console.log(res);
  res.send("test");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});

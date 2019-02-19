const app = require("express")();
const port = 4200;

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`app listening on port ${port}`);
});
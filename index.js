const {Server} = require("http");
const fs = require("fs");
const server = new Server();
const port = 4200;

server.listen(port);

server.on("request", function(req, res) {
  const url = req.url === "/" ? "index" : req.url || "404";
  if (Boolean(url) && url !== "/favicon.ico") {
    const fullPath = `${__dirname}/html/${url}.html`;
    fs.readFile(fullPath, {encoding: "utf8"}, (err, file) => {
      if (err) {
        console.error(err);
        return false;
      }
      res.writeHead(200, {"Content-Type": "text/html", "Content-Length": file.length});
      res.end(file);
    });
  }
});

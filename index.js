const http = require("http");

const server = http.createServer();

server.on("request", function(req, res) {
  res.writeHead(200, {"Content-Type": "text/html"});
  res.end("<h1>Hello World!</h1>");
  console.log("request");
});

server.on("connection", function(req, res) {
  console.log("connection", req.localPort);
});

server.listen(4200);
server.on("listening", () => {
  console.log("listening");
});

const http = require("http");

const server = http.Server(function(req, res) {

}).listen(4200);

setTimeout(() => {
  server.close();
}, 2500);

setInterval(() => {
  console.log(process.memoryUsage());
}, 1000).unref();
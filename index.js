const http = require("http");

/**
 * Creation web-server
 */
http.createServer((req, res) => {
    res.writeHead(200, {"Content-type": "text/html"});
    res.end("<h1 style='text-align: center;display:block;'>Hello World!</h1>");
}).listen(8080);
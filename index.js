const http = require("http");
const _ = require("lodash");
/**
 * Creation web-server
 */
http.createServer((req, res) => {
    if (!_.isUndefined(res)) {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<h1 style='text-align: center;display:block;'>Hello World!</h1>");
    }
}).listen(8080);
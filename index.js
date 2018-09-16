const http = require("http");
const _ = require("lodash");
const server = new http.Server;
/**
 * Creation web-server
 */
server.listen(8080);
server.on("request", (req, res) => {
    if (!_.isUndefined(res)) {
        res.writeHead(200, {"Content-type": "text/html"});
        res.end("<h1 style='text-align: center;display:block;'>Hello World!</h1>");
    }
});
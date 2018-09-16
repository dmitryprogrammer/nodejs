const http = require("http");
const url = require("url");
const _ = require("lodash");
const server = new http.Server();
/**
 * Creation web-server
 */
server.on("request", (req, res) => {
    const parsedUrl = url.parse(req.url, true);
    console.log(parsedUrl.query);

    if (!_.isUndefined(res)) {
        res.writeHead(200, {"Content-type": "text/html"});
        res.write("<h1 style='text-align: center;display:block;'>" + parsedUrl.query.message + "</h1>");
        res.write("<h1 style='text-align: center;display:block;'>Hello World!</h1>");
        res.end("<h1 style='text-align: center;display:block;'>Hello World!</h1>");
    }
});
server.listen(8080);
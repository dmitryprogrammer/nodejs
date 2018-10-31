const http = require("http");
const url = require("url");
const server = new http.Server();
const _ = require("lodash");
/**
 * Creation web-server
 */
server.on("request", (req, res) => {
    const parsedUrl = url.parse(req.url, true);

    if (!_.isUndefined(res)) {
        res.writeHead(200, {"Content-type": "text/html"});
        res.write("<h1 style='text-align: center;display:block;'>" + parsedUrl.query['message'] + "</h1>");
        res.write("<h1 style='text-align: center;display:block;'>Hello World!</h1>");
        res.end("<h1 style='text-align: center;display:block;'>Hello World!</h1>");
    }
});
server.listen(8080);

process.stdin.setEncoding("utf8");

process.stdin.on("readable", () => {
    const input = process.stdin.read();

    if (input !== null) {
        process.stdout.write(input);
    }

    const command = input.trim();
    if (command === "exit") {
        process.exit(0);
    }
});

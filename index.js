const {Server} = require("http");
const querystring = require("querystring");
const server = new Server().listen(4200);

server.on("request", (request, response) => {
    const {method} = request.headers;
    let body = "";
    if (method === "POST") {
        request.on("data", data => {
            body += data;
        });

        request.on("end", () => {
            const post = querystring.parse(body);
            console.log(post);
            response.writeHead(200, {"Content-Type": "text/plain"});
            response.end("Hello world\n");
        });
    }
});

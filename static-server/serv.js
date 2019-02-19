const {Server} = require("http");
const {stat, createReadStream, readFile} = require("fs");
const server = new Server();
const port = 3000;

server.listen(port);

server.on("request", function(req, res) {
    const url = req.url === "/" ? "index" : req.url || "404";
    if (Boolean(url) && url !== "/favicon.ico") {
        const fullPath = `${__dirname}/static-server/html/${url}.html`;
        stat(fullPath, (err) => {
            if (err) {
                //  404 page
                console.error(err);
                res.writeHead(404);
                readFile(`${__dirname}/static-server/html/404.html`, (err, file) => {
                    if (err) {
                        return false;
                    }
                    res.write(file);
                    res.end();
                });
                return false;
            }
            const file = createReadStream(fullPath);
            res.setHeader("Content-Type", "text/html");
            file.on("open", () => {
                res.statusCode = 200;
                file.pipe(res);
            });
        });
    }
});

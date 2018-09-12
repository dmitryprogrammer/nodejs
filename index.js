const https = require("https");

https.createServer({}, (req, res) => {
    res.writeHead(200);
    res.end('hello world\n');
}).listen(3000);
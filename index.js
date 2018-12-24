const {Server} = require("http");
const server = new Server();
const emit = server.emit;
let counter = 0;

server.emit = function (event) {
    console.log(event);
    emit.apply(server, arguments);
};

server.listen(4200);

server.on("request", (req, res) => {
    res.end(`hello world ${++counter}`);
});

const server = require("./server");
const db = require("./db");

db.connect();
db.getPhrase("Run successful");

server.server("test");
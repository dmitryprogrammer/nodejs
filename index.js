const server = require("./server");
const db = require("./db");
const logger = require("./logger")(module);

db.connect();
logger(db.getPhrase("Run successful"));

server.server("test");

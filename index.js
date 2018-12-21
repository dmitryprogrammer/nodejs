const fs = require("fs");
const test = require("./db/test");
const console = require("console").Console;
const logStream = fs.createWriteStream("./db/log.txt");
const errorStream = fs.createWriteStream("./db/err.txt");
const logger = new console(logStream, errorStream);

function readFiles() {
    fs.readdir("./db", (err, dir) => {
        logger.log(dir);
        dir.forEach(file => {
            logger.log(file);
            fs.readFile(file, (errF, file) => {
                if (!errF) {
                    logger.log(file ? file.toString() : file);
                }
            });
        });
    });
}

readFiles();

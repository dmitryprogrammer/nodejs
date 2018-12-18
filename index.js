const fs = require("fs");
const test = require("./db/test");
console.log(test);

function readFiles() {
    fs.readdir("./db", (err, dir) => {
        console.log(dir);
        dir.forEach(file => {
            console.log(file);
            fs.readFile(file, (errF, file) => {
                if (!errF) {
                    console.log(file ? file.toString() : file);
                }
            });
        });
    });
}

readFiles();

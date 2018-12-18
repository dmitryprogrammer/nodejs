const fs = require("fs");

fs.readdir("./db", (err, dir) => {
    console.log(dir);
    fs.readFile(dir[0], (errF, file) => {
        console.log(file.toString());
    });
});

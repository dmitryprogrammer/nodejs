let db;

function connect() {
    db = require("./users");
}

function getPhrase(name) {
    if (db[name]) {
        console.log(db[name]);
    } else {
        throw new Error("Property is undefined");
    }
}

exports.connect = connect;
exports.getPhrase = getPhrase;
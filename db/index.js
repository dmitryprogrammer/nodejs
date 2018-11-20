let db;

function connect() {
    db = require("./users");
}

function logPhrase(name) {
    if (db[name]) {
        console.log(db[name]);
    } else {
        throw new Error("Property is undefined");
    }
}

function getPhrase(name) {
    return db[name];
}

exports.connect = connect;
exports.logPhrase = logPhrase;
exports.getPhrase = getPhrase;

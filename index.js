const server = require("./server");
const db = require("./db");
const util = require("util");
const logger = require("./logger")(module);
const PhraseError = require("./errors").PhraseError;
const HttpError = require("./errors").HttpError;

db.connect();
db.logPhrase("Run successful");

function getPhrase(name) {
    const receivedPhrase = db.getPhrase(name);
    if (!receivedPhrase) {
        throw new PhraseError(`Нет такой фразы: ${name}`);
    }
    return receivedPhrase;
}

function makePage(url) {
    if (url !== "index.html") {
        throw new HttpError(404, `Нет такой страницы: ${url}`);
    }
    return util.format(`%s, %s!`, getPhrase("Hell"), getPhrase("Run successful"));
}

try {

    const page = makePage("index.htm");
    console.log(page);
} catch (e) {
    console.error(`Ошибка %s\n сообщение: %s\n стек: %s`, e.name, e.message, e.stack);
}
const util = require("util");
const ee = require("events").EventEmitter;
const fs = require("fs");

function InputChecker(name, file) {
  this.name = name;
  this.writeStream = fs.createWriteStream(`./${file}.txt`, {flags: "a", encoding: "utf8", mode: 0o666});
}

util.inherits(InputChecker, ee);

InputChecker.prototype.check = function(i) {
  const input = i.trim();
  const command = input.substr(0, 3);
  const message = input.substr(3, input.length);

  switch (command) {
    case "wr:":
      this.emit("write", `${message}\n`);
      break;
    case "en:":
      this.emit("end");
      break;
    default:
      this.emit("echo", input);
  }
};

const ic = new InputChecker("My first test", "output");

ic.on("write", function(data) {
  this.writeStream.write(data, "utf8");
});

ic.on("echo", function(data) {
  process.stdout.write(`${ic.name}wrote${data}`);
});

ic.on("end", function() {
  process.exit();
});

process.stdin.setEncoding("utf8");
process.stdin.on("readable", function() {
  let input = process.stdin.read();
  if (input !== null) {
    ic.check(input);
  }
});

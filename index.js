const {EventEmitter} = require("events");
const ee = new EventEmitter;

ee.on("a", (data) => {
    console.log(data);
});

ee.emit("a", {test: "test"});
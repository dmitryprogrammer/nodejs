const EventEmitter = require("events");

const myEmitter = new EventEmitter();

myEmitter.addListener("connected", () => console.log("connected"));
myEmitter.emit("connected");

myEmitter.on("msg", (data) => {
    console.log(`Got: ${data}`);
});

myEmitter.emit('msg', 'Test Message');

console.log(myEmitter.getMaxListeners());
console.log(myEmitter.listenerCount('msg'));

const EventEmitter = require("events");

//create class
class MyEmitter extends EventEmitter {}

//init object
const myEmitter = new MyEmitter();

//event listner
myEmitter.on("event", () => console.log("event fired!"));

//init event
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");
myEmitter.emit("event");

const EventEmitter = require("events");

let myEventEmitter = new EventEmitter();
myEventEmitter.on("wroteCode", () => {
  console.log("Somebody wrote some code!");
});

myEventEmitter.on("wroteCode", () => {
  console.log("Busy building Node apps!");
});

myEventEmitter.emit("wroteCode");

let paramEventEmitter = new EventEmitter();
paramEventEmitter.on("wroteCode", (language) => {
  console.log(`Somebody wrote some ${language} code!`);
});

paramEventEmitter.emit("wroteCode", "Java");

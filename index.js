const EventEmitter = require("events");

class Events extends EventEmitter {}

const ev = new Events();

ev
  .on("message", (numb1, numb2) => console.log(numb1 + numb2))
  .on("teste", (text) => console.log(text));

module.exports = ev;

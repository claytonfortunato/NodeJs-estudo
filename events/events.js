const { EventEmitter } = require("events");
const ev = new EventEmitter();

// on = para ouvir sempre
// once = para ouvir uma unica vez

ev.on("saySomething", (message) => {
  console.log("Eu ouvi você:", message);
});

ev.emit("saySomething", "João");

// Herdando do EventEmitter
const { inherits } = require("util");
const { EventEmitter } = require("events");

function Character(name) {
  this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character("Chapolin");
chapolin.on("help", () => console.log(`Eu! o ${chapolin.name} colorado!`));

console.log("Oh! E agora, quem poderá me defender?");
chapolin.emit("help");

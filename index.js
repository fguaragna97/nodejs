const commandLineArgs = require("command-line-args");

const items = [];

const params = [
  {
    name: "item",
    alias: "i",
    type: String,
  },
  {
    name: "completed",
    alias: "c",
    type: Boolean,
  },
  {
    name: "date",
    alias: "d",
    type: String,
  },
];

const options = commandLineArgs(params);

const { item = "", completed = false, date = "" } = options;
if (item) {
  items.push({ item, completed, date });
}

console.log(items);

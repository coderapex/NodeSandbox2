console.log("Starting app.js");

// shortform for console.log
function log(v) {
  console.log(v);
}

// npm modules below
const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

// custom modules below
const notes = require("./notes");

// viewing the argument options
// log(process.argv);

const argv = yargs.argv;
let command = yargs.argv._[0];
log(`COMMAND : ${command}`);
console.log("YARGS : ", argv);

// performing different actions based on the command arguments
if (command === "add") {
  log("COMMAND ADD activated");
  let note = notes.addNote(argv.title, argv.body);
  // console.log(note);

  if (note) console.log("SUCCESS - Returned to app.js.");
  else console.log("FAIL - Returned to app.js.");
} else if (command === "list") {
  log("COMMAND LIST activated");
  notes.getAll();
} else if (command === "read") {
  log("COMMAND READ activated");
  notes.getNote(argv.title);
} else if (command === "remove") {
  log("COMMAND REMOVE activated");
  notes.removeNote(argv.title);
} else {
  log("NO COMMAND or command not recognized");
}

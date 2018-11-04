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

const argv = yargs
  .command("add", "Add a new note", {
    title: {
      describe: "Title of the note",
      demand: true,
      alias: "t"
    },
    body: {
      describe: "Body of the note",
      demand: true,
      alias: "b"
    }
  })
  .command("list", "List all notes saved on the system")
  .command("read", "Read a note with a given title", {
    title: {
      describe: "Title of the note",
      demand: true,
      alias: "t"
    }
  })
  .command("remove", "Remove a note with a given title", {
    title: {
      describe: "Title of the note",
      demand: true,
      alias: "t"
    }
  })
  .help().argv;
let command = yargs.argv._[0];

// performing different actions based on the command arguments
if (command === "add") {
  log("COMMAND ADD activated");
  // node app.js add --title="Title0" --body="Body0"
  let note = notes.addNote(argv.title, argv.body);
  // console.log(note);

  if (note) console.log("SUCCESS - Returned to app.js.");
  else console.log("FAIL - Returned to app.js.");
} else if (command === "list") {
  log("COMMAND LIST activated");
  // node app.js list
  notes.getAll();
} else if (command === "read") {
  log("COMMAND READ activated");
  // node app.js read --title="Title0"
  notes.getNote(argv.title);
} else if (command === "remove") {
  log("COMMAND REMOVE activated");
  notes.removeNote(argv.title);
} else {
  log("NO COMMAND or command not recognized");
}

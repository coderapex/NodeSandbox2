console.log("Starting notes.js");

const fs = require("fs");

let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (e) {
    return [];
  }
};

let saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};
var addNote = (title, body) => {
  console.log("*** In addNote()\nADDING NOTE : \n", title, body);
  let notes = fetchNotes();
  let note = { title, body };

  try {
    let notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (e) {}

  let duplicateNotes = notes.filter(note => note.title === title);
  if (duplicateNotes.length === 0) {
    notes.push(note);
    saveNotes(notes);

    console.log(
      "SUCCCESS : note added to notes-data.json\n--- Leaving addNote()"
    );
    return note;
  } else {
    console.log(
      "FAIL : note already exists in notes-data.json\n--- Leaving addNote()"
    );
  }
};

var getAll = () => {
  console.log("*** In getAll()\nLISTING NOTES : \n");
  console.log("SUCCCESS : all notes fetched\n--- Leaving getAll()");
};

var getNote = title => {
  console.log("*** In getNote()\nREADING NOTE : \n", title);
  console.log(
    `SUCCCESS : note with title "${title}" fetched\n--- Leaving getNote()`
  );
};

var removeNote = title => {
  console.log("*** In removeNote()\nREMOVING NOTE : \n", title);
  console.log(
    'SUCCCESS : note with title "${title}" removed\n--- Leaving addNote()'
  );
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};

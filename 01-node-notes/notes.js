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
  let allNotes = fetchNotes();
  console.log(`*** In getAll()\nLISTING ALL ${allNotes.length} NOTES : \n`);
  allNotes.forEach(note => {
    console.log(`---\nTitle : ${note.title}\nBody : ${note.body}`);
  });
  console.log("SUCCCESS : all notes fetched\n--- Leaving getAll()");
};

var getNote = title => {
  console.log("*** In getNote()\nREADING NOTE : \n", title);

  // fetch full list
  let allNotes = fetchNotes();
  console.log("-- Fetching all notes");
  // console.log(allNotes);

  // filter the item you want
  console.log("-- Filtering notes");
  let note = allNotes.filter(current => {
    // console.log(`Current: ${current.title} Wanted: ${title}`);

    if (current.title === title) return current;
  });

  // display the item you want
  console.log(`The required note is`);
  console.log(note);

  console.log(
    `SUCCCESS : note with title "${title}" fetched\n--- Leaving getNote()`
  );
};

var removeNote = title => {
  console.log("*** In removeNote()\nREMOVING NOTE : \n", title);

  let allNotes = fetchNotes();
  console.log("All Notes : \n", allNotes);

  let alteredNotes = [];
  alteredNotes = allNotes.filter(note => title != note.title);
  // allNotes.filter(note => { note.title === title; });
  console.log("Altered Notes : \n", alteredNotes);

  saveNotes(alteredNotes);

  console.log(
    `SUCCCESS : note with title "${title}" removed\n--- Leaving removeNote()`
  );
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};

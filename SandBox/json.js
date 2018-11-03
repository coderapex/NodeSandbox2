// let obj = {
//   name: "John Doe",
//   fullName: { first: "John", last: "Doe" }
// };

// let stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

// let personString = '{"name":"Abbas", "age":"30"}';

// let personObj = JSON.parse(personString);
// console.log(typeof personObj);
// console.log(personObj);

const fs = require("fs");

let originalNote = {
  title: "Some Title",
  body: "Some Body"
};

let originalNoteString = JSON.stringify(originalNote);

fs.writeFileSync("notes.json", originalNoteString);

let noteString = fs.readFileSync("notes.json");
let note = JSON.parse(noteString);
console.log(typeof note);
console.log(note.title);

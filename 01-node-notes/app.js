console.log("Starting app.");

const fs = require("fs");
const os = require("os");
const _ = require("lodash");
const notes = require("./notes");

let user = os.userInfo();

// console.log("User info fetched : ");
// console.log(user);

let res = notes.addNote();
console.log(res);

res = notes.add(1, 4);
console.log(res);

fs.appendFile("greetings.txt", `Hello, ${user.username}\n`, function(err) {
  if (err) {
    console.log("There was a problem with writing the file. \nERROR : ");
    console.log(err);
  } else console.log("File Written");
});

// fs.appendFile("greetings.txt","Hello World!!");

console.log("app.js execution completed.");

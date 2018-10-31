console.log("Starting app.");

const fs = require("fs");
const os = require("os");

var user = os.userInfo();

console.log("User info fetched : ");
console.log(user);

fs.appendFile("greetings.txt",`Hello, ${user.username}`, function (err) {
    if (err){
        console.log("There was a problem with writing the file. \nERROR : ");
        console.log(err);
    }
    else console.log("File Written");
});

// fs.appendFile("greetings.txt","Hello World!!");





console.log("app.js execution completed.");
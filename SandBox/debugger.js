// set of staements to check debugging
let person = {
  name: "John Doe",
  age: 35,
  city: "Los Angeles"
};

debugger;

let getPerson = person => console.log(person);

let setPerson = (name, age, city) => {
  this.name = name;
  this.age = age;
  this.city = city;
};

let joseph = setPerson("Joseph Jesus", 50, "Jerusulem");

getPerson(joseph);

// using the Chrome debugger
/*
node inspect -> this debugs from the command line

node --inspect-brk file-name.js -> starts debugger in chrome

node --inspect-brk=127.0.0.1:9999 SandBox/debugger.js -> specify where to start the debugger

nodemon --inspect-brk=127.0.0.1:9999 SandBox/debugger.js -> run with nodemon

chrome://inspect/#devices -> chrome dev tools address
*/

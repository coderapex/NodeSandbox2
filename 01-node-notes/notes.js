console.log("Starting notes.js");

var addNote = (title, body) => {
  console.log("ADDING NOTE : \n", title, body);
};

var getAll = () => {
  console.log("LISTING NOTES : \n");
};

var getNote = title => {
  console.log("READING NOTE : \n", title);
};

var removeNote = title => {
  console.log("REMOVING NOTE : \n", title);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote
};

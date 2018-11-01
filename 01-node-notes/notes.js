console.log("Starting notes.js");

module.exports.addNote = () => {
    console.log('In addNote()');

    return 'New Note Created';
};

module.exports.add = (a,b) => {
    return a+b;
}
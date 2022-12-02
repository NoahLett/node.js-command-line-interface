const fs = require('fs');
const data = require('./data.json');
const notes = data.notes;

if (process.argv[2] === 'read') {
  fs.readFile('data.json', 'utf8', data => {
    for (const property in notes) {
      console.log(`${property}` + ': ' + notes[property]);
    }
  });
}

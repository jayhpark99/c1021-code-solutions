const fs = require('fs');
const JSONdata = require('./data.json');

if (process.argv[2] === 'read') {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) throw err;
    for (const id in JSONdata.notes) {
      console.log(`${id}:`, JSONdata.notes[id]);
    }
  });
} else if (process.argv[2] === 'create') {
  JSONdata.notes[JSONdata.nextId++] = process.argv[3];
  fs.writeFile('data.json', `${JSON.stringify(JSONdata, null, 2)}`, 'utf-8', err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'update') {
  JSONdata.notes[`${process.argv[3]}`] = process.argv[4];
  fs.writeFile('data.json', `${JSON.stringify(JSONdata, null, 2)}`, 'utf-8', err => {
    if (err) throw err;
  });
} else if (process.argv[2] === 'delete') {
  delete JSONdata.notes[`${process.argv[3]}`];
  fs.writeFile('data.json', `${JSON.stringify(JSONdata, null, 2)}`, 'utf-8', err => {
    if (err) throw err;
  });
}

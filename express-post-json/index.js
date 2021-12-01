const express = require('express');
const app = express();
let nextId = 1;
const grades = {};
app.get('/api/grades', (req, res) => {
  const array = [];
  for (const key in grades) {
    array.push(grades[key]);
  }
  res.json(array);
});

const parseMiddleware = express.json();
app.use('/api/grades', parseMiddleware);

app.post('/api/grades', (req, res) => {
  // eslint-disable-next-line no-console
  console.log(req.body);
  req.body.id = nextId++;
  grades[req.body.id] = req.body;
  res.status(201).send(req.body);
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('listening on 3000');
});

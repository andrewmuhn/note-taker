const notes = require('express').Router();
const { readFromFile } = require('../helpers/fsUtils');

notes.route('/')
  .get((req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  })
  .post((req, res) => {

  })
// .delete(':id', (req, res) => {

// });

module.exports = notes;
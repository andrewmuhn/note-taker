const notes = require('express').Router();
const { readFromFile, readAndAppend } = require('../helpers/fsUtils');
const { v4: uuidv4 } = require('uuid');

notes.route('/')
  .get((req, res) => {
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  })
  .post((req, res) => {
    console.log(req.body);

    const { title, text } = req.body;

    if (req.body) {
      const newNote = {
        title,
        text,
        note_id: uuidv4()
      };

      readAndAppend(newNote, './db/db.json');
      res.json('Note added successfully');
    } else {
      res.errored('Error adding Note');
    }
  });

notes.route('/:id')
  .get((req, res) => {

  })
  .delete((req, res) => {

  });

module.exports = notes;
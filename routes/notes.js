const notes = require('express').Router();
const { readFromFile, readAndAppend, readAndDelete } = require('../helpers/fsUtils');
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
                id: uuidv4()
            };

            readAndAppend(newNote, './db/db.json');
            res.json('Note added successfully');
        } else {
            res.error('Error adding Note');
        }
    });

notes.delete('/:id', (req, res) => {

    if (req.params.id) {
        readAndDelete(req.params.id, './db/db.json')
        res.json('Note deleted successflly');
    } else {
        res.error('Error deleting note');
    }

});
module.exports = notes;
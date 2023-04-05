const express = require('express');

// import modular routers for /notes
const notesRouter = require('./notes');

const app = express();

// initialize notes route
app.use('/notes', notesRouter)

module.exports = app;
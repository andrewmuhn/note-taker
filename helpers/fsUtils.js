const fs = require('fs');
const util = require('util');

// pulls data from file
const readFromFile = util.promisify(fs.readFile);

// Writes appended data to file
const writeToFile = (destination, content) => {
  fs.writeFile(destination, JSON.stringify(content, null, 4), (err) =>
    err ? console.error(err) : console.info(`\nData written to ${destination}`)
  );
};

// Reads data from file, appends new data and then fires of writeToFile
const readAndAppend = (content, file) => {
  fs.readFile(file, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
    } else {
      const parsedData = JSON.parse(data);
      parsedData.push(content);
      writeToFile(file, parsedData);
    }
  });
};


module.exports = { readFromFile, readAndAppend }
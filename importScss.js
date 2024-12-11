
const fs = require('fs');

const directoryPath = __dirname + '/src/js';

fs.readdir(directoryPath, (err, files) => {
  if (err) {
    console.error( err);
    return;
  }

  files.forEach(file => {
    console.log("import './js/"+ file + "';");
  });
});
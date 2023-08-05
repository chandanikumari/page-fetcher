const request = require('request');
const fs = require('fs');

// const URL = 'http://www.example.edu/';
// const path = './index.html';
const arg = process.argv.slice(2);
request(arg[0],(error, response, content) => {
  if (error) {
    console.log("Error is :",error);
  }
  if (response.statusCode) {
    console.log("StatusCode :",response.statusCode);
  }
  fs.writeFile(arg[1], content, err => {
    if (err) {
      console.error(err);
      return;
    }
    let fileSize = (fs.statSync(arg[1]))["size"];
    console.log(`Downloaded and saved ${fileSize} bytes to ${arg[1]}`);

  // file written successfully
  });
});
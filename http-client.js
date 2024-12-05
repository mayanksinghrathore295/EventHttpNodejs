const http = require('http');

// Define the URL to make the GET request to
const url = 'http://localhost:3000';

// Make the GET request
http.get(url, (res) => {
  let data = '';

  // A chunk of data has been received.
  res.on('data', (chunk) => {
    data += chunk;
  });

  // The whole response has been received. Print out the result.
  res.on('end', () => {
    console.log(data);
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});

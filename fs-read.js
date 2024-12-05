const fs = require('fs');

// Create a readable stream
const readableStream = fs.createReadStream('example.txt', { encoding: 'utf8', highWaterMark: 16 * 1024 });

// Handle the 'data' event to read chunks of data
readableStream.on('data', function(chunk) {
    console.log('Reading a chunk of data:', chunk);
});

// Handle the 'end' event when no more data is available
readableStream.on('end', function() {
    console.log('Finished reading the file.');
});

readableStream.on('error', function(err) {
    console.error('Error encountered while reading file:', err);
});

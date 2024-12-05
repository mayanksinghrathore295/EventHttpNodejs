const fs = require('fs');

// Create a writable stream
const writableStream = fs.createWriteStream('output.txt',{flags:'a' });

// Write some data to the stream
writableStream.write('Hello, ');
writableStream.write('World!\n');

// End the stream
writableStream.end('Ending the writable stream.');

// Listen for the 'finish' event
writableStream.on('finish', () => {
    console.log('Finished writing to the file.');
});

const { Transform } = require('stream');

// Create a transform stream
const transformStream = new Transform({
  transform(chunk, encoding, callback) {
    // Convert chunk to upper case
    this.push(chunk.toString().toUpperCase());
    callback();
  }
});

// Use the transform stream
transformStream.on('data', (chunk) => {
  console.log('Transformed:', chunk.toString());
});

transformStream.write('hello, ');
transformStream.write('world!');
transformStream.end(); // Finish writing

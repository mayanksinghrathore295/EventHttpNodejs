const { Duplex } = require('stream');

// Create a duplex stream
const duplexStream = new Duplex({
  read(size) {
    this.push('data chunk'); // Push data to be read
    this.push(null); // No more data
  },
  write(chunk, encoding, callback) {
    console.log('Writing:', chunk.toString());
    callback();
  }
});

// Use the duplex stream
duplexStream.on('data', (chunk) => {
  console.log('Read:', chunk.toString());
});

duplexStream.push('Hello, Duplex!');

duplexStream.write('Test');

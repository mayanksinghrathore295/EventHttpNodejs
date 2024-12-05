// Import the events module
const EventEmitter = require('events');

// Create an instance of EventEmitter
const myEmitter = new EventEmitter();

// Event handler function
const handleEvent = (message) => { console.log(`An event occurred: ${message}`);};

// Attach the event handler to an event
myEmitter.on('eventName', handleEvent);

// Emit the event
myEmitter.emit('eventName', 'Hello, this is my event!');

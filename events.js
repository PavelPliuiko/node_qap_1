// Description: The events module provides a way to work with events and event-driven programming.
// The EventEmitter class allows you to create and handle custom events.

// Importing the events module
const EventEmitter = require('events');

// Creating an event emitter instance
const myEmitter = new EventEmitter();

// Defining a custom event
myEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emitting the custom event
myEmitter.emit('greet', 'Alice');

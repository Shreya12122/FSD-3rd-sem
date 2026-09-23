const EventEmitter = require('events');

const emitter = new EventEmitter();


emitter.on('login', (name) => {
    console.log(`${name} logged in successfully`);
});


emitter.on('assignment', (name) => {
    console.log(`${name} submitted the assignment`);
});


emitter.on('logout', (name) => {
    console.log(`${name} logged out`);
});


emitter.on('exit', () => {
    console.log("Exiting application");
});


const student = "Shreya";

emitter.emit('login', student);
emitter.emit('assignment', student);
emitter.emit('logout', student);
emitter.emit('exit');
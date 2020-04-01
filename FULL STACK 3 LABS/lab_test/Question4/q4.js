const moment = require('moment'); 
const events = require('events');
const eventEmitter = new events.EventEmitter();

let currentTimeCallback = () => {
let Time = moment().format('hh:mm:ss a');
console.log(`Current Time: ${Time}`);}

eventEmitter.on('currentTime', currentTimeCallback)
eventEmitter.emit('currentTime')


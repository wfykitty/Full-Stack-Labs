var events = require('events');
var eventEmitter = new events.EventEmitter();

// once this function gets called, the emiter gets called as well
var fn = function (){
    console.log('call me');
    eventEmitter.emit('call1');
}
var eh = function (){
    console.log('dont call me, call someone else');
    eventEmitter.emit('call2');
} 
var eh2 = () => {
    console.log('call superman');
}

eventEmitter.on('call', fn).on('call1', eh).on('call2', eh2);
// eventEmitter.on('call2', eh2);

eventEmitter.emit('call');



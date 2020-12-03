
 const notifyCustomer = require('../controller/notifyCustomer');
const notifySeller = require('../controller/notifySeller');
const notifyTras = require('../controller/notifyTransport');

const addStartup = require("../controller/addStartup")

const EventEmitter = require('events');

class eventEmitter extends EventEmitter {}

const myEmitter = new eventEmitter();
const emitter = new eventEmitter();


emitter.on('order', notifyCustomer);
emitter.on('order', notifySeller);
emitter.on('order', notifyTras);

myEmitter.on('newstartup', addStartup);


module.exports = {emitter, myEmitter};

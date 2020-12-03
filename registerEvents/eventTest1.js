// const EventEmitter1 = require("events");

// const soldTicket = require('../controller/soldTicket');

// class TicketManager extends EventEmitter1 {
//     constructor(supply) {
//         super();
//         this.supply = supply;
//     }

//     buy(email, price) {
//         this.supply--;
//         this.emit("buy", email, price, Date.now());
//     }
// }

// const ticketManager = new TicketManager(10);

// ticketManager.on("buy", soldTicket);



// module.exports = ticketManager;
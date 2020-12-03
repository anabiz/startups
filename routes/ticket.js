var express = require('express');
var router = express.Router();

const { ticketManager } = require("../registerEvents/eventTest1")


/* buy ticket listener. */
router.get('/', function(req, res, next) {
    ticketManager.buy('anabizconcept@gmail.com', 200)
    res.send('A ticket was sold');
  });



module.exports = router;
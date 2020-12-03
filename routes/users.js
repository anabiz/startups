var express = require('express');
var router = express.Router();


const { emitter } = require("../registerEvents/eventTest")

/* GET users listing. */
router.get('/', function(req, res, next) {
  emitter.emit('order')
  res.send('respond with a resource');
});

module.exports = router;

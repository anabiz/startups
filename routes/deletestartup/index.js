var express = require('express');
var router = express.Router();

const  deleteStartup  = require("../../controller/deleteStartup");

/* delete startup. */
router.delete('/:id', deleteStartup );


module.exports = router;

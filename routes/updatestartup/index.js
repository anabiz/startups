var express = require('express');
var router = express.Router();

const  updateStartup  = require("../../controller/deleteStartup");

/* update startup. */
router.get('/', updateStartup );


module.exports = router;

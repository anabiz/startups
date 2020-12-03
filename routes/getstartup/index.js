var express = require('express');
var router = express.Router();

const  getStartup  = require("../../controller/getStartup");

/* GET startup. */
router.get('/', getStartup );


module.exports = router;

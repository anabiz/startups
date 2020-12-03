var express = require('express');
var router = express.Router();

const  getStartupById  = require("../../controller/getStartupById");

/* get startup by id. */
router.get('/:id', getStartupById );


module.exports = router;

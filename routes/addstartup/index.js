var express = require('express');
var router = express.Router();

const  addStartup  = require("../../controller/addStartup")


/* add startup. */
router.post('/',addStartup );


module.exports = router;

var express = require('express');
var router = express.Router();
const mainController = require('../controllers/mainController')

router.get("/", mainController.home);

module.exports = router;

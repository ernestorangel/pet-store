var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

router.get("/login", usersController.login);
router.get("/signup", usersController.signup);
router.get("/enter/:id", usersController.enter);

module.exports = router;

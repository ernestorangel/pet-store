const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');

usersRouter.get('/login', usersController.login);
usersRouter.get("/signup", usersController.signup);
usersRouter.get("/enter/:id", usersController.enter);

module.exports = usersRouter;

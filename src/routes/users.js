const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');
const signupAuth = require('../middlewares/signupAuth')

usersRouter.get('/login', usersController.login);

usersRouter.get("/signup", usersController.signup);
usersRouter.post("/store",signupAuth, usersController.store);

usersRouter.get("/enter/:id", usersController.enter);

module.exports = usersRouter;

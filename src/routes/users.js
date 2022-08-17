const express = require('express');
const usersRouter = express.Router();
const usersController = require('../controllers/usersController');
const loginAuth = require('../middlewares/loginAuth');
const signupAuth = require('../middlewares/signupAuth');
const auth = require('../middlewares/auth');

usersRouter.get('/login', usersController.login);

usersRouter.post('/logar', loginAuth, usersController.logarUser);

usersRouter.get("/signup", usersController.signup);

usersRouter.post("/store", signupAuth, usersController.store);

usersRouter.get("/enter/:id", auth, usersController.enter);

usersRouter.post("/edit/:id", auth, usersController.update);

module.exports = usersRouter;

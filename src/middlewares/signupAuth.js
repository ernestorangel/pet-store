const { body } = require('express-validator');

const signupAuth = [
    body("first_name").notEmpty().isString().withMessage('Digite o Nome'),
    body("last_name").notEmpty().isString().withMessage('Digite o Sobrenome'),
    body("email").notEmpty().isEmail().withMessage('Digite Um Email'),
    body("password").notEmpty().withMessage('Digite Uma Senha'),
];

module.exports = signupAuth
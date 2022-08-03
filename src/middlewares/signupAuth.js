const { body } = require('express-validator');

const signupAuth = [
    body("first_name").notEmpty().withMessage('Digite o Nome').isString(),
    body("last_name").notEmpty().isString().withMessage('Digite o Sobrenome'),
    body("email").notEmpty().withMessage('Digite Um Email').isEmail(),
    body("password").notEmpty().withMessage('Digite Uma Senha'),
];

module.exports = signupAuth
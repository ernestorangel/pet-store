const { body } = require('express-validator');

const loginAuth = [  
    body("email").notEmpty().isEmail().withMessage('Digite Um Email Valido'),
    body("password").notEmpty().withMessage('Digite Uma Senha Valida'),
];

module.exports = loginAuth
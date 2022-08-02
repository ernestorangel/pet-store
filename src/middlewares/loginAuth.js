const { body } = require('express-validator');

const loginAuth = [  
    body("email").notEmpty().withMessage('Digite Um Email Valido').isEmail(),
    body("password").notEmpty().withMessage('Digite Uma Senha Valida'),
];

module.exports = loginAuth
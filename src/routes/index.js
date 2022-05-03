var express = require('express');
var router = express.Router();
const mainControllers = require('../controllers/mainControllers')

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Projeto Integrador' });
// });

router.get("/", mainControllers.home)

router.get("/contato", mainControllers.contato)

module.exports = router;

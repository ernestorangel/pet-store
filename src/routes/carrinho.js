var express = require('express');
var router = express.Router();
const carrinhoControllers = require('../controllers/carrinhoControllers')

router.get("/compras", carrinhoControllers.compras)

router.get("/pedidos", carrinhoControllers.pedidos)

module.exports = router;
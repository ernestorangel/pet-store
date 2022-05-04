const express = require('express');
const router = express.Router();
const carrinhoControllers = require('../controllers/carrinhoControllers')

router.get("/compras", carrinhoControllers.compras)

router.get("/pedidos", carrinhoControllers.pedidos)

module.exports = router;
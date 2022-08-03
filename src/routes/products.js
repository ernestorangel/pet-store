const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get("/view/:id", productsController.view);
router.post('/addCart', productsController.addCart)
router.get("/search/:word", productsController.search);
router.get("/register", productsController.register);

module.exports = router;
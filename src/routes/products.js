const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

router.get("/:id", productsController.view);
router.get("/search/:word", productsController.search);

module.exports = router;
const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');
const auth = require('../middlewares/auth');

router.get("/view/:id", productsController.view);
router.post('/addCart', auth, productsController.addCart)
router.get("/search", productsController.search);
router.get("/register", productsController.register);
router.post("/addProd", productsController.addProd);

module.exports = router;
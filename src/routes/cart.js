var express = require('express');
var router = express.Router();
const cartController = require('../controllers/cartController');

router.get("/add/:product", cartController.add);
router.get("/delete/:product", cartController.remove);
router.get("/delete/all", cartController.erase);
router.get("/checkout", cartController.checkout);

module.exports = router;
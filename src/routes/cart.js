const express = require('express');
const router = express.Router();
const cartController = require('../controllers/cartController');
const auth = require('../middlewares/auth');

// router.get("/add/:product", cartController.add);
// router.get("/delete/:product", cartController.remove);
// router.get("/delete/all", cartController.erase);
// router.get("/checkout", cartController.checkout);


// Rotas Carrinho De Compra
router.get("/2", cartController.carrinho)
router.get("/",auth, cartController.carrinho2)

router.post("/update", auth, cartController.update);

//Rotas Deleção
router.delete('/delete/:id', cartController.destroy)

// Rotas Paginas Forma Pagamento
router.post("/checkout", cartController.checkout)
router.get("/checkout", auth, cartController.test)

module.exports = router;
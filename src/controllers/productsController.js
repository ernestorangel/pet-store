const path = require('path')
const productController = {
    search: (req, res) => {
      res.render('productsList',);
    },
    view: (req, res) => {
      res.render('product2');
    }
}
module.exports = productController
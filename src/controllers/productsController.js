const path = require('path')
const productController = {
    search: (req, res) => {
      res.render('productsList',);
    },
    view: (req, res) => {
      res.render('product');
    }
}
module.exports = productController
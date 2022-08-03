const path = require('path')
const {Product} = require('../database/models');

// function getProduct(id) {
//   let product;
//   Product.findByPk(id, {
//       attributes: ['id_product', 'name', 'price', 'img'],
//   }).then((data)=>{
//       product = data.dataValues;
//   });
//   return product
// }

const productController = {
    search: (req, res) => {
      res.render('productsList',);
    },
    view: async (req, res) => {
      let prod = await getProduct(req.params.id);
      res.render('product2', {
        prod: prod,
      });
    },
    register: async (req, res) => {
      res.render('productRegistration');
    }
}
module.exports = productController
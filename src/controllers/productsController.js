const path = require('path')
const {Product, Cart} = require('../database/models');

async function getProduct(id) {
  let product;
  await Product.findByPk(id, {
      attributes: ['id_product','description', 'name', 'price', 'img'],
  }).then((data)=>{
      product = data.dataValues;
  });
  return product
}

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
    addCart: async (req,res) => {      
      let prod = await getProduct(req.body.id)
      await Cart.create({
        name:prod.name,
        description: prod.description,
        price: prod.price,
        img: prod.img
      })
      
      console.log('Teste Price', prod)
        return res.send('ok')
      
    }
}
module.exports = productController
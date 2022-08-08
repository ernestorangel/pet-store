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

function setPriceAsCurrency(value) {
  let splited = value.split('.');
  splited.push('00');
  let valueAsCurrency = "R$ " + splited[0] + "," + splited[1];
  return valueAsCurrency;
};

function fixPriceOfProduct(product) {
  product.price = setPriceAsCurrency(product.price);
  return product;
};

const productController = {
    search: (req, res) => {
      res.render('productsList',);
    },
    view: async (req, res) => {
      let toastStatus = "no-show";
      if(req.query.login == 'error') {
          toastStatus = "show";
      }
      let isLogged = false;
      if (req.session.user == undefined) {
          isLogged = false;
      } else {
          isLogged = true;
          user = req.session.user;
      }
      let prod = fixPriceOfProduct(await getProduct(req.params.id));
      res.render('product2', {
        toastStatus: toastStatus,
        isLogged: isLogged,
        prod: prod
      });
    },
    register: async (req, res) => {
      res.render('productRegistration');
    },
    addCart: async (req,res) => {      
      let prod = await getProduct(req.body.id)
      await Cart.create({
        name:prod.name,
        description: prod.description,
        price: prod.price,
        img: prod.img
      })
      
      res.redirect('/cart');
      
    },
    addProd: async (req, res) => {
      await Product.create({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price
      });
      return res.redirect("/products/register");
    }
};

module.exports = productController;
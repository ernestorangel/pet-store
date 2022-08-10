const path = require('path');
const { Product, Cart } = require('../database/models');
const Sequelize = require('sequelize');


async function getProduct(id) {
  let product;
  await Product.findByPk(id, {
      attributes: ['id_product','description', 'name', 'price', 'img'],
  }).then((data)=>{
      product = data.dataValues;
  });
  return product
}

async function getArrayOfProducts(maxNumberOfProducts) {
  let products = [];
  await Product.findAll({
      attributes: ['id_product', 'name', 'price', 'img'],
      limit: maxNumberOfProducts
  }).then((data)=>{
      data.forEach((item) => {
          products.push(item.dataValues);
      });
  });
  return products;
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

function fixPricesOfProducts(arrayOfProducts) {
  arrayOfProducts.forEach((product)=>{
      product.price = setPriceAsCurrency(product.price);
  });
  return arrayOfProducts;
};

function setStandardProductImage(arrayOfProducts) {
  arrayOfProducts.forEach((product)=>{
      if (product.img == null) product.img = '/images/products/std-no-photo-img.jpg';
  });
  return arrayOfProducts;
};

const productController = {
    search: async (req, res) => {
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

      const sequelize = new Sequelize("pet_store", "root", null, {
        dialect: "mysql"
      });
      
      let products = await sequelize.query(
        `SELECT * FROM pet_store.products AS p WHERE p.name LIKE :regex `, 
        { 
          type: sequelize.QueryTypes.SELECT,
          replacements: {
            regex: `%${req.query.word}%`
          }
        }
      );

      sequelize.close();

      res.render('productsList2', {
        title: 'Categorias',
        toastStatus: toastStatus,
        isLogged: isLogged,
        searched: req.query.word,
        products: setStandardProductImage(fixPricesOfProducts(products))
      });
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
      let product = await Cart.findOne({
        where: {
          id_product: req.body.id,
          id_user: req.session.user.id_user,
        }
      });

      if (product === null) {
        await Cart.create({
          id_product: req.body.id,
          id_user: req.session.user.id_user,
          qtd: req.body.qtd
        });
      } else {
        await product.set({
          qtd: (parseInt(product.qtd) + parseInt(req.body.qtd)) + ''
      });

      await product.save();
      }


      
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
const { timeStamp } = require('console');
const path = require('path')
const {Product ,Cart ,BestSellers ,Order ,Product_in_order ,sequelize} = require('../database/models');


function setPriceAsCurrency(value) {
    let splited = value.split('.');
    splited.push('00');
    let valueAsCurrency = "R$ " + splited[0] + "," + splited[1];
    return valueAsCurrency;
};

function fixPricesOfProducts(arrayOfProducts) {
    arrayOfProducts.forEach((product)=>{
        product.price = setPriceAsCurrency(product.price);
        product.product_total = setPriceAsCurrency(product.product_total + '');
    });
    return arrayOfProducts;
};

const cartController = {
    carrinho: async (req, res) => {
        let product = await Cart.findAll();
        res.render('cart', { title: 'Carrinho', product:product});
    },
    carrinho2: async (req,res)=>{
        let toastStatus = "no-show";
        let isLogged = false;
        let user;
        if (req.session.user == undefined) {
            isLogged = false;
        } else {
            isLogged = true;
            user = req.session.user;
        }        

        let bestSellers = await BestSellers.findAll();

        let carts = await Cart.findAll({
            where: {id_user: req.session.user.id_user},
            attributes: ['id_product', 'qtd'],
            include: 'products'
        });

        let products = [];
        carts.forEach((item) => {
            products.push(item.dataValues);
        });

        console.log(products)
        let productsDetails = [];
        products.forEach((item)=>{
            let values = item.products[0].dataValues;
            values.qtd = item.qtd;
            values.product_total = parseInt(item.qtd) * parseFloat(values.price);
            productsDetails.push(values);
        });
        
        let finalProductOnCart = fixPricesOfProducts(productsDetails);

        res.render('cart2', { 
            title:'Carrinho',
            products: finalProductOnCart,
            isLogged: isLogged,
            user: user,
            toastStatus: toastStatus,
            bestSellers: bestSellers,
        });
    },
    destroy: async (req,res)=>{
        const resultado = await Cart.destroy({
            where:{
                id_user: req.session.user.id_user,
                id_product: req.params.id
            }
        });
        res.redirect('/cart');
    },
    checkout: async (req,res,next) =>{        

        let carts = await Cart.findAll({
            where: {id_user: req.session.user.id_user},
            attributes: ['id_product', 'qtd'],
            include: 'products'
        });
        
        let products = [];
        carts.forEach((item) => {
            products.push(item.dataValues);
        });       

        let productsDetails = [];
        products.forEach((item)=>{
            let values = item.products[0].dataValues;
            values.qtd = item.qtd;
            values.product_total = parseInt(item.qtd) * parseFloat(values.price);
            productsDetails.push(values);
        });
        
        let productQtd = Object.keys(productsDetails).reduce(function (previous, key) {
            return previous + productsDetails[key].qtd;
        }, 0);
        let productTotal = Object.keys(productsDetails).reduce(function (previous, key) {
            return previous + productsDetails[key].product_total;
        }, 0);

        console.log('produtos detalhes ',productsDetails)
        console.log('produtos total ',productTotal)
        console.log('produtos Quantidade ',productQtd)


        let order = await Order.create({
            id_user: req.session.user.id_user,
            id_adress: null,
            created_at: timeStamp(),
            updated_at: null,
            shipping: 9.90,
            qtd: productQtd,
            total: productTotal
        });

        console.log('produto Order ',order)


        productsDetails.forEach((e)=>{
            Product_in_order.create({
                id_product: e.id_product,
                id_order: order.id_order
            })
        }) 

        await Cart.destroy({
            where: {
                id_user: req.session.user.id_user,                
            }
        });

        res.send('Adicionado Na Order')
    },
    update: async (req, res) => {
        if (req.query.new_qtd == 0) {
            await Cart.destroy({
                where: {
                    id_user: req.session.user.id_user,
                    id_product: req.body.id_product
                }
            });
        } else {
            let product = await Cart.findOne({
                where: {
                    id_user: req.session.user.id_user,
                    id_product: req.body.id_product
                }
            });
    
            await product.set({
                qtd: req.query.new_qtd
            });
    
            await product.save();
        }

        res.redirect("/cart");
    }
}
module.exports = cartController
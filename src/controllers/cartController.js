const path = require('path')
const {Product, Cart, sequelize} = require('../database/models');

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

        // let product = await Cart.findAll();
        // res.render('cart2', { 
        //     title:'Carrinho',
        //     product:product,
        //     isLogged: isLogged,
        //     user: user,
        //     toastStatus: toastStatus,
        // });

        let carts = await Cart.findAll({
            where: {id_user: req.session.user.id_user},
            attributes: ['id_product', 'qtd'],
            include: 'products'
        });

        let products = [];
        carts.forEach((item) => {
            products.push(item.dataValues);
        });

        console.log(products);

        res.render('cart2', { 
            title:'Carrinho',
            products: products,
            isLogged: isLogged,
            user: user,
            toastStatus: toastStatus,
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
        let product = await Product_in_Order.findAll();
        res.render('checkout', { title: 'Checkout', product:product });
    },
    update: async (req, res) => {

        let product = await Cart.findOne({
            where: {
                id_user: req.session.user.id_user,
                id_product: req.body.id_product
            }
        });

        await product.set({
            qtd: req.body.qtd
        });

        await product.save();

        res.redirect("/cart");
    }
}
module.exports = cartController
// const cartController = {
//     add:(req, res) => {
//         res.render('cart', {title: "Add"});
//     },
//     remove: (req, res) => {
//         res.render('cart', {title: "Remove"});
//     },
//     erase: (req, res) => {
//         res.render('cart', {title: "Erase"});
//     },
//     checkout: (req, res) => {
//         res.render('checkout', {title: "Checkout"});
//     }
// }
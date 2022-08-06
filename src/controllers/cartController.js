const path = require('path')
const {Product, Cart} = require('../database/models');

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
        let product = await Cart.findAll();
        res.render('cart2', { 
            title:'Carrinho',
            product:product,
            isLogged: isLogged,
            user: user,
            toastStatus: toastStatus,
        });
    },

    destroy: async (req,res)=>{
        let id = req.params.id

        const resultado = await Cart.destroy({
            where:{
                id_cart:id
            }
        })
        res.redirect('/cart')
    },

    checkout: async (req,res,next) =>{
        let product = await Product_in_Order.findAll();
        res.render('checkout', { title: 'Checkout', product:product });
    },
    
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
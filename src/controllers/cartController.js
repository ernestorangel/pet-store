const path = require('path')
const casinha = path.join('images', 'products', 'casinhaLuxoPreta.png')
const produtos = [{
    titulo: "Casinha Luxo Preta",
    descricao: "Esteja Sempre Pronto para levar seu Pet com voce",
    quantidade: 2,
    preco: 150.00,
},
{
    titulo: "Tapete Higienico",
    descricao: "Local Adequado para seu Pet Fazer necessidade",
    quantidade: 1,
    preco: 50.00
},{
    titulo: "Comedouro",
    descricao: "Pote Ideal para seu pet se alimentar",
    quantidade: 1,
    preco: 20.00
}]

const cartController = {
    carrinho:(req, res) => {
        res.render('cart', { title: 'Carrinho' });
    },
    checkout: (req,res,next) =>{
        res.render('checkout', { title: 'Checkout', produtos: produtos });
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
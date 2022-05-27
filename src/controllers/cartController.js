const path = require('path')
const produtosDestaque = [{
    titulo: "Alimentador Automatico",
    descricao: "Coloque até 4 Litros de Agua e Deixe seu pet sempre hidratado",
    preco: 75,
    imagen: "Pet-Shop-Produtos-Pet-Pet-Alimentador-Autom-tico-De-Comida-Auto-Beber-gua-C-o-Gato-removebg-preview.png"
},
{
    titulo: "Caixa Transporte",
    descricao: "Esteja Sempre Pronto para levar seu Pet com voce",
    preco: 75,
    imagen: "casinhaLuxoPreta.png"
}]
const produtos = [{
    titulo: "Casinha Luxo Preta",
    descricao: "Esteja Sempre Pronto para levar seu Pet com voce",
    quantidade: 2,
    preco: 150,
    imagen: "casinhaLuxoPreta.png"
},
{
    titulo: "Tapete Higienico",
    descricao: "Local Adequado para seu Pet Fazer necessidade",
    quantidade: 1,
    preco: 50,
    imagen: "fornecedores-produtos-pet-shop-atacado-01-removebg-preview.png"
},{
    titulo: "Comedouro",
    descricao: "Pote Ideal para seu pet se alimentar",
    quantidade: 1,
    preco: 20,
    imagen: "fabrica-produtos-pet-shop-01-removebg-preview.png"
}]

const cartController = {
    carrinho:(req, res) => {
        res.render('cart', { title: 'Carrinho', produtos: produtos });
    },
    carrinho2:(req,res)=>{
        res.render('cart2', { title: 'Carrinho', produtosDestaque: produtosDestaque , produtos: produtos });
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
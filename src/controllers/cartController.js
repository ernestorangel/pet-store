const path = require('path')
const cartController = {
    add:(req, res) => {
        res.render('cart', {title: "Add"});
    },
    remove: (req, res) => {
        res.render('cart', {title: "Remove"});
    },
    erase: (req, res) => {
        res.render('cart', {title: "Erase"});
    },
    checkout: (req, res) => {
        res.render('checkout', {title: "Checkout"});
    }
}
module.exports = cartController
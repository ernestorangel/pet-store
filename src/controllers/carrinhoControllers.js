const path = require('path')
const carrinhoControllers = {
    compras:(req, res) => {
        res.render('contato', { title: 'Compras' });
    },
    pedidos: (req,res,next) =>{
            res.render('index', { title: 'Pedidos' });
          }
}
module.exports = carrinhoControllers
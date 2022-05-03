const path = require('path')
const mainControllers = {
    contato:(req, res) => {
        res.render('contato', { title: 'Contato' });
    },
    home: (req,res,next) =>{
            res.render('index', { title: 'Projeto Integrador' });
          }
}
module.exports = mainControllers
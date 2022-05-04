const path = require('path')
const usersController = {
    search:  (req, res) => {
      res.render('productsList',);
    },
    view: (req,res,next) => {
      res.render('product');
    }
}
module.exports = usersController
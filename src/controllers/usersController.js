const path = require('path')
const usersController = {
    login:  (req, res) => {
      res.render('login');
    },
    signup: (req,res,next) => {
      res.render('signup');
    },
    enter: (req, res) => {
      res.render('userPanel');
    }
}
module.exports = usersController
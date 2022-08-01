const { User } = require('../database/models')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');


const usersController = {
    login: (req, res) => {
      res.render('login');
    },


    signup: (req, res) => {
      res.render('signup');
    },
    store: async (req, res) => {
      const {first_name, last_name, email, password } = req.body
      let criptografada = bcrypt.hashSync(password, 10)

      let errors = validationResult(req)
        if(errors.isEmpty()){            
        }else{
            console.log(errors.mapped())
            return res.render('signup', {errors: errors.mapped(), old: req.body});
        }

      await User.create({
        first_name,
        last_name,
        email,
        password:criptografada
      })

      return res.redirect('/users/login')
    },

    enter: (req, res) => {
      res.render('userPanel2');
    }
};
module.exports = usersController;
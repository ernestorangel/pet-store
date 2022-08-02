const { User } = require('../database/models')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const salt = bcrypt.genSaltSync(10)


const usersController = {
    login: (req, res) => {
      res.render('login');
    },

    logarUser: async (req, res) => {
      const {email, password, logado } = req.body
      let user = await User.findOne({        
        raw: true,
        where: {
          email: email,          
        }
      })     
      let errors = validationResult(req)
        if(errors.isEmpty()){            
        }else{
          console.log(errors.mapped())
          return res.render('login', {errors: errors.mapped(), old: req.body});
      }

      console.log('Usuarios ', user)
      if(user == null){
        return res.send("Usuario Nao Encontrado")        
      }

      if(email != user.email){
        return res.send("Email nao Cadastrado")
      }

      if(!bcrypt.compareSync(password, user.password)){
        return res.send("Senha Invalida")
      }

      req.session.user = user

      if(logado != undefined){
        res.cookie('logado', user.email, {maxAge:600000})
      }

      res.redirect('/')
    },


    signup: (req, res) => {
      res.render('signup');
    },
    store: async (req, res) => {
      const {first_name, last_name, email, password } = req.body
      let criptografada = bcrypt.hashSync(password, salt)      

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
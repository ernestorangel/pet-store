const { User } = require('../database/models')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const salt = bcrypt.genSaltSync(10)

async function getUserById(user_id) {
  return await User.findByPk(user_id);
};

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

      // if(logado == undefined){
      //   res.cookie('logado', user.email, {maxAge:600000})
      // }

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
    enter: async (req, res) => {
      let toastStatus = "no-show";
        if(req.query.login == 'error') {
            toastStatus = "show";
        }
      let isLogged = false;
      let user;
      if (req.session.user == undefined) {
          isLogged = false;
      } else {
          isLogged = true;
          user = req.session.user;
      }
      console.log(user);
      res.render('userPanel2', {
        showModal: false,
        toastStatus: toastStatus,
        user: user,
        isLogged: isLogged
      });
    }
};
module.exports = usersController;
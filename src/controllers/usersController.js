const { User } = require('../database/models')
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const salt = bcrypt.genSaltSync(10)
const Sequelize = require('sequelize');

async function getUserById(user_id) {
  return await User.findByPk(user_id);
};

function excludeEmptyProperties(user) {
  for (let property in user) {
    if (user[property] == '') {
      delete user[property];
    };
  }
  return user;
};

function encryptPassword(user) {
  if (user.password != undefined) user.password = bcrypt.hashSync(user.password, salt);
  return user;
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

      const sequelize = new Sequelize("pet_store", "root", null, {dialect: "mysql"});

      let orders = await sequelize.query(
        `SELECT
        o.id_order,
        o.shipping,
        o.total,
        p.id_product,
        p.name,
        p.description,
        p.price,
        group_concat(i.img) as imgs
        FROM pet_store.orders AS o
        LEFT JOIN pet_store.products_in_orders AS pio
        ON o.id_order = pio.id_order
        LEFT JOIN pet_store.products AS p
        ON pio.id_product = p.id_product
        LEFT JOIN pet_store.images_of_product AS iop
        ON iop.id_product = p.id_product
        LEFT JOIN pet_store.product_images AS i
        ON iop.id_image = i.id_image
        WHERE o.id_user = :id
        GROUP BY 1, 2, 3, 4, 5, 6`,
        { 
          type: sequelize.QueryTypes.SELECT,
          replacements: { id: req.session.user.id_user }
        }
      );
    
      sequelize.close();

      orders.forEach((item)=>{
        if (item.imgs == null) item.imgs = ['/images/products/std-no-photo-img.jpg'];
        else item.imgs = item.imgs.split(',');
      });

      let orderFinal = [];
      orders.forEach((item)=>{
        let found = false;

        let obj = {
          id_order: item.id_order,
          shipping: item.shipping,
          total: item.total,
          products: []
        };

        orderFinal.forEach((item)=>{
          if(item.id_order == obj.id_order) found = true;
        });

        if (!found) orderFinal.push(obj);
      });

      orders.forEach((item)=>{
        let id_order = item.id_order
        let prod = {
          id_product: item.id_product,
          name: item.name,
          description: item.description,
          price: item.price,
          imgs: item.imgs
        };

        orderFinal.forEach((item)=>{
          if(item.id_order == id_order) item.products.push(prod);
        });

      });

      res.render('userPanel2', {
        showModal: false,
        toastStatus: toastStatus,
        user: user,
        isLogged: isLogged,
        orders: orderFinal
      });
    },
    update: async (req, res) => {
      let dataToUpdate = await excludeEmptyProperties(await encryptPassword(req.body));
      await User.update(dataToUpdate, {where: {id_user: req.params.id}});
      req.session.user = await User.findByPk(req.params.id);
      return res.redirect(`/users/enter/${req.params.id}`);
    }
};
module.exports = usersController;
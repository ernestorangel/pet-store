const { User } = require('../database/models');
const bcrypt = require('bcrypt');
const { validationResult } = require('express-validator');
const salt = bcrypt.genSaltSync(10);
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

function setPriceAsCurrency(value) {
  let splited = value.split('.');
  splited.push('00');
  let valueAsCurrency = "R$ " + splited[0] + "," + splited[1];
  return valueAsCurrency;
};

function fixPricesOfProducts(arrayOfProducts) {
  arrayOfProducts.forEach((product)=>{
      product.price = setPriceAsCurrency(product.price);
  });
  return arrayOfProducts;
};

const usersController = {
    login: (req, res) => {
      let toastStatus = 'no-show';
      let toastMessage = '';
      let toastColor = 'transparent';

      if(req.query.error == 'user') {
        toastStatus = "show";
        toastMessage = 'Usuário Não Encontrado.';
        toastColor = 'red';
      }

      if(req.query.error == 'email') {
        toastStatus = "show";
        toastMessage = 'E-mail não cadastrado.';
        toastColor = 'red';
      }

      if(req.query.error == 'pass') {
        toastStatus = "show";
        toastMessage = 'Senha inválida';
        toastColor = 'red';
      }

      res.render('login', {
        toastStatus: toastStatus,
        toastMessage: toastMessage,
        toastColor: toastColor
      });
    },
    logarUser: async (req, res) => {
      let toastStatus = 'no-show';
      let toastMessage = '';
      let toastColor = 'transparent';
      const {email, password, logado } = req.body
      let user = await User.findOne({        
        raw: true,
        where: {
          email: email,
        }
      })
      
      console.log("user teste: ", user)
          
      let errors = validationResult(req)
        if(errors.isEmpty()){            
        }else{
          console.log(errors.mapped())
          return res.render('login', {
            toastStatus: toastStatus,
            toastMessage: toastMessage,
            toastColor: toastColor,
            errors: errors.mapped(), 
            old: req.body
          });
      }
      
      if(user == null){
        //return res.send("Usuario Nao Encontrado")
        return res.redirect("/users/login?error=user");
      }

      if(email != user.email){
        //return res.send("Email nao Cadastrado")
        return res.redirect("/users/login?error=email");
      }

      if(!bcrypt.compareSync(password, user.password)){
        //return res.send("Senha Invalida")
        return res.redirect("/users/login?error=pass");
      }

      req.session.user = user

      // if(logado == undefined){
      //   res.cookie('logado', user.email, {maxAge:600000})
      // }

      res.redirect('/')
    },
    signup: (req, res) => {
      let toastStatus = 'no-show';
      let toastMessage = '';
      let toastColor = 'transparent';

      if(req.query.error == 'email') {
        toastStatus = "show";
        toastMessage = 'E-mail Já Cadastrado.';
        toastColor = 'red';
      }

      res.render('signup',{
        toastStatus: toastStatus,
        toastMessage: toastMessage,
        toastColor: toastColor
      });
    },
    store: async (req, res) => {
      let toastStatus = 'no-show';
      let toastMessage = '';
      let toastColor = 'transparent';
      const {first_name, last_name, email, password } = req.body
      let criptografada = bcrypt.hashSync(password, salt)

      let errors = validationResult(req)

      let userEmail = await User.findOne({
        where:{
          email:email
        }
      })

      console.log('usuario email', userEmail)

      if(errors.isEmpty()){            
      }else{
        console.log(errors.mapped())
        return res.render('signup',{
          toastStatus: toastStatus,
          toastMessage: toastMessage,
          toastColor: toastColor,
          errors: errors.mapped(),
          old: req.body,
        });
      } 
      
      if(userEmail === null){
        await User.create({
          first_name,
          last_name,
          email,
          password:criptografada
        })        
        return res.redirect('/users/login')
      }else{
        return res.redirect("/users/signup?error=email");
      }

      
    },
    enter: async (req, res) => {
      if (req.params.id != req.session.user.id_user) {
        return res.redirect('/');
      }

      let toastStatus = "no-show";
        if(req.query.login == 'error') {
            toastStatus = "show";
        }
      let isLogged = false;
      let user;
      if (req.session.user == undefined) {
        isLogged = false;
        return res.redirect('/?login=error')
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
        pio.product_qtd,
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
        GROUP BY 1, 2, 3, 4, 5, 6, 7`,
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
          imgs: item.imgs,
          qtd: item.product_qtd
        };

        orderFinal.forEach((item)=>{
          if(item.id_order == id_order) item.products.push(prod);
        });

      });

      orderFinal.forEach((order)=>{
        order.shipping = setPriceAsCurrency(order.shipping);
        order.total = setPriceAsCurrency(order.total);
        order.products = fixPricesOfProducts(order.products);
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
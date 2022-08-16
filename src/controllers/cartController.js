const { timeStamp } = require('console');
const path = require('path')
const Sequelize = require('sequelize');
const {Product ,Cart ,BestSellers ,Order ,Product_in_order ,sequelize} = require('../database/models');


function setPriceAsCurrency(value) {
    let splited = value.split('.');
    splited.push('00');
    let valueAsCurrency = "R$ " + splited[0] + "," + splited[1];
    return valueAsCurrency;
};

function fixPricesOfProducts(arrayOfProducts) {
    arrayOfProducts.forEach((product)=>{
        product.product_total = parseFloat(product.qtd) * parseFloat(product.price);
        product.price = setPriceAsCurrency(product.price);
        product.product_total = setPriceAsCurrency(product.product_total + '');
    });
    return arrayOfProducts;
};

const cartController = {
    carrinho: async (req, res) => {
        let product = await Cart.findAll();
        res.render('cart', { title: 'Carrinho', product:product});
    },
    carrinho2: async (req,res)=>{
        let toastStatus = "no-show";
        let isLogged = false;
        let user;
        if (req.session.user == undefined) {
            isLogged = false;
        } else {
            isLogged = true;
            user = req.session.user;
        }        

        let bestSellers = await BestSellers.findAll();

        const sequelize = new Sequelize("pet_store", "root", null, {dialect: "mysql"});

        let carts = await sequelize.query(
            `SELECT
            c.qtd,
            p.id_product,
            p.name,
            p.description,
            p.price,
            group_concat(i.img) as imgs
            FROM pet_store.cart AS c
            LEFT JOIN pet_store.products AS p
            ON c.id_product = p.id_product
            LEFT JOIN pet_store.images_of_product AS iop
            ON iop.id_product = p.id_product
            LEFT JOIN pet_store.product_images AS i
            ON iop.id_image = i.id_image
            WHERE c.id_user = :id
            GROUP BY 1, 2, 3, 4`,
            { 
              type: sequelize.QueryTypes.SELECT,
              replacements: { id: req.session.user.id_user }
            }
        );
      
        sequelize.close();

        // let carts = await Cart.findAll({
        //     where: {id_user: req.session.user.id_user},
        //     attributes: ['id_product', 'qtd'],
        //     include: 'products'
        // });

        // let products = [];
        // carts.forEach((item) => {
        //     products.push(item.dataValues);
        // });

        // let productsDetails = [];
        // products.forEach((item)=>{
        //     let values = item.products[0].dataValues;
        //     values.qtd = item.qtd;
        //     values.product_total = parseInt(item.qtd) * parseFloat(values.price);
        //     productsDetails.push(values);
        // });
        
        // let finalProductOnCart = fixPricesOfProducts(productsDetails);

        carts.forEach((item)=>{
            if (item.imgs == null) item.imgs = ['/images/products/std-no-photo-img.jpg'];
            else item.imgs = item.imgs.split(',');
        });

        let finalProductOnCart = fixPricesOfProducts(carts);

        res.render('cart2', { 
            title:'Carrinho',
            products: carts,
            isLogged: isLogged,
            user: user,
            toastStatus: toastStatus,
            bestSellers: bestSellers,
        });
    },
    destroy: async (req,res)=>{
        const resultado = await Cart.destroy({
            where:{
                id_user: req.session.user.id_user,
                id_product: req.params.id
            }
        });
        res.redirect('/cart');
    },
    checkout: async (req,res,next) =>{        

        let carts = await Cart.findAll({
            where: {id_user: req.session.user.id_user},
            attributes: ['id_product', 'qtd'],
            include: 'products'
        });
        
        let products = [];
        carts.forEach((item) => {
            products.push(item.dataValues);
        });       

        let productsDetails = [];
        products.forEach((item)=>{
            let values = item.products[0].dataValues;
            values.qtd = item.qtd;
            values.product_total = parseInt(item.qtd) * parseFloat(values.price);
            productsDetails.push(values);
        });
        
        let productQtd = Object.keys(productsDetails).reduce(function (previous, key) {
            return previous + productsDetails[key].qtd;
        }, 0);
        let productTotal = Object.keys(productsDetails).reduce(function (previous, key) {
            return previous + productsDetails[key].product_total;
        }, 0);

        // console.log('produtos detalhes ',productsDetails)
        // console.log('produtos total ',productTotal)
        // console.log('produtos Quantidade ',productQtd)


        let order = await Order.create({
            id_user: req.session.user.id_user,
            id_adress: null,
            created_at: timeStamp(),
            updated_at: null,
            shipping: 9.90,
            qtd: productQtd,
            total: productTotal
        });

        // console.log('produto Order ',order)


        productsDetails.forEach((e)=>{
            Product_in_order.create({
                id_product: e.id_product,
                id_order: order.id_order,
                product_qtd: e.qtd                
            })
        }) 

        await Cart.destroy({
            where: {
                id_user: req.session.user.id_user,                
            }
        });

        res.redirect(`/cart/checkoutTest?id=${order.id_order}`);
    },
    update: async (req, res) => {
        if (req.query.new_qtd == 0) {
            await Cart.destroy({
                where: {
                    id_user: req.session.user.id_user,
                    id_product: req.body.id_product
                }
            });
        } else {
            let product = await Cart.findOne({
                where: {
                    id_user: req.session.user.id_user,
                    id_product: req.body.id_product
                }
            });
    
            await product.set({
                qtd: req.query.new_qtd
            });
    
            await product.save();
        }

        res.redirect("/cart");
    },
    test: async (req, res) => {
        let toastStatus = "no-show";
        let isLogged = false;
        let user;
        if (req.session.user == undefined) {
            isLogged = false;
        } else {
            isLogged = true;
            user = req.session.user;
        }
        
        const sequelize = new Sequelize("pet_store", "root", null, {dialect: "mysql"});

        let products = await sequelize.query(
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
            WHERE o.id_order = :id
            GROUP BY 1, 2, 3, 4, 5, 6`,
            { 
              type: sequelize.QueryTypes.SELECT,
              replacements: { id: req.query.id }
            }
        );
      
        sequelize.close();

        //res.send(products);

        res.render('checkout2', {
            title: 'Checkout',
            toastStatus: toastStatus,
            isLogged: isLogged,
            user: user,
            products: products
        })
    }
}
module.exports = cartController
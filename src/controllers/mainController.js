const path = require('path');
const { PassThrough } = require('stream');
const { Product, Images_of_product, User } = require('../database/models');
const Sequelize = require('sequelize');

// Data Contador Home
let finishDate = new Date(2022, 7, 25, 15, 30, 0);

async function getArrayOfProducts(maxNumberOfProducts) {
    const sequelize = new Sequelize("pet_store", "root", null, {dialect: "mysql"});

    let products = await sequelize.query(
        `SELECT
        p.id_product,
        p.name,
        p.description,
        p.price,
        group_concat(i.img) as imgs
        FROM pet_store.products AS p
        LEFT JOIN pet_store.images_of_product AS iop 
        ON p.id_product = iop.id_product
        LEFT JOIN pet_store.product_images AS i
        ON iop.id_image = i.id_image
        GROUP BY 1, 2, 3, 4
        LIMIT :limit`,
        { 
          type: sequelize.QueryTypes.SELECT,
          replacements: {
            limit: maxNumberOfProducts
          }
        }
    );

    sequelize.close();

    return products;
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

function setStandardProductImage(arrayOfProducts) {
    arrayOfProducts.forEach((product)=>{
        if (product.img == null) product.img = '/images/products/std-no-photo-img.jpg';
    });
    return arrayOfProducts;
};

function setStandardUserImage(user) {
    if (user != undefined && user.avatar == undefined) {
        user.avatar = "/images/profile/std-pp.png"
    };
    return user;
};

const homeProperties = {
    homeTitle: "PET STORE | Tudo para o seu pet",
    bannerImages: [
        "/images/banners/carousel-banner-1.png",
        "/images/banners/carousel-banner-2.png",
        "/images/banners/carousel-banner-3.png",
        "/images/banners/carousel-banner-4.png"
    ],
    features: [
        "Receba em horas", 
        "Frete Grátis Brasil", 
        "Até 10x sem juros",
        "Retire e troque na loja"
    ],
    categoriesTitles: [
        "Nutrição",
        "Cama & Banho",
        "Beleza & Estética",
        "Brinquedos"
    ],
    categoriesImages: [
        "/images/banners/nutrition-banner.png",
        "/images/banners/bed-bath-banner.png",
        "/images/banners/beauty-banner.png",
        "/images/banners/toy-banner.png"
    ],
    productsShowcaseTitle1: "Continue Comprando",
    productsShowcaseTitle2: "Produtos Recomendados",
    brandsShowcaseTitle1: "Marcas em Destaque",
    brands1: [
        {
            name: 'Pedigree',
            image: "/images/logos/pedigree-logo.png"
        },
        {
            name: 'Purina',
            image: "/images/logos/purina-logo.png"
        },
        {
            name: 'Royal Canin',
            image: "/images/logos/royal-canin-logo.png"
        },
        {
            name: 'Whiskas',
            image: "/images/logos/whiskas-logo.png"
        },
    ],
    promotionTimer: {
        value: finishDate
    },
    promotionProducts: [{
        image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
        name: "Snack Petiscão Palito",
        price: "R$ 199,90"
    },
    {
        image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
        name: "Snack Petiscão Palito",
        price: "R$ 199,90"
    }],
    productsShowcaseTitle3: "Mais vendidos no momento"
};

const mainController = {
    home: async (req, res) => {
        let toastStatus = "no-show";
        if(req.query.login == 'error') {
            toastStatus = "show";
        }
        let isLogged = false;
        let user;
        if (req.session.user == undefined) {
            isLogged = false;
        } else {
            user = req.session.user;
            let result = await User.findOne({
                where: {
                    id_user: req.session.user.id_user
                }
            })

            console.log("result: ", result)
            user.avatar = result.avatar;
            isLogged = true;
        }
        let prod1 = await fixPricesOfProducts(await getArrayOfProducts(10));
        prod1.forEach((item)=>{
            if (item.imgs == null) item.imgs = ['/images/products/std-no-photo-img.jpg'];
            else item.imgs = item.imgs.split(',');
        })
        let prod2 = await fixPricesOfProducts(await getArrayOfProducts(10));
        prod2.forEach((item)=>{
            if (item.imgs == null) item.imgs = ['/images/products/std-no-photo-img.jpg'];
            else item.imgs = item.imgs.split(',');
        })
        let prod3 = await fixPricesOfProducts(await getArrayOfProducts(10));
        prod3.forEach((item)=>{
            if (item.imgs == null) item.imgs = ['/images/products/std-no-photo-img.jpg'];
            else item.imgs = item.imgs.split(',');
        })
        let promotionProducts = await fixPricesOfProducts(await getArrayOfProducts(2));
        promotionProducts.forEach((item)=>{
            if (item.imgs == null) item.imgs = ['/images/products/std-no-photo-img.jpg'];
            else item.imgs = item.imgs.split(',');
        })
        user = setStandardUserImage(user);
        res.render('home2', {
            title: homeProperties.homeTitle,
            toastStatus: toastStatus,
            isLogged: isLogged,
            user: user,
            bannerImages: homeProperties.bannerImages,
            features: homeProperties.features,
            categoriesTitles: homeProperties.categoriesTitles,
            categoriesImages: homeProperties.categoriesImages,
            productsShowcaseTitle1: homeProperties.productsShowcaseTitle1,
            products1: prod1,
            productsShowcaseTitle2: homeProperties.productsShowcaseTitle2,
            products2: prod2,
            brandsShowcaseTitle1: homeProperties.brandsShowcaseTitle1,
            brands1: homeProperties.brands1,
            promotionTimer: homeProperties.promotionTimer,
            promotionProducts: promotionProducts,
            productsShowcaseTitle3: homeProperties.productsShowcaseTitle3,
            products3: prod3,
        });
    }
}
module.exports = mainController;
const path = require('path');
const {Product} = require('../database/models');

let finishDate = new Date(2022, 7, 8, 15, 30, 0);

async function getArrayOfProducts(maxNumberOfProducts) {
    let products = [];
    await Product.findAll({
        attributes: ['id_product', 'name', 'price', 'img'],
        limit: maxNumberOfProducts
    }).then((data)=>{
        data.forEach((item) => {
            products.push(item.dataValues);
        });
    });
    return products;
}

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
    products2: [
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/fornecedores-produtos-pet-shop-01-removebg-preview.png",
            name: "Casinha Pet Rosa",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        }
    ],
    brandsShowcaseTitle1: "Marcas em Destaque",
    brands1: [
        {
            image: "/images/logos/pedigree-logo.png"
        },
        {
            image: "/images/logos/purina-logo.png"
        },
        {
            image: "/images/logos/royal-canin-logo.png"
        },
        {
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
    productsShowcaseTitle3: "Mais vendidos no momento",
    products3: [
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        },
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 199,90"
        }
    ]
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
            isLogged = true;
            user = req.session.user;
        }
        let prod1 = setStandardProductImage(fixPricesOfProducts(await getArrayOfProducts(10)));
        let prod2 = setStandardProductImage(fixPricesOfProducts(await getArrayOfProducts(10)));
        let prod3 = setStandardProductImage(fixPricesOfProducts(await getArrayOfProducts(10)));
        user = setStandardUserImage(user);
        console.log(user);
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
            promotionProducts: homeProperties.promotionProducts,
            productsShowcaseTitle3: homeProperties.productsShowcaseTitle3,
            products3: prod3,
        });
    }
}
module.exports = mainController;
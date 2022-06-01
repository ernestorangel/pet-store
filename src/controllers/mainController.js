const path = require('path')
const homeProperties = {
    homeTitle: "PET STORE | Tudo para o seu pet",
    bannerImages: [
        "/images/banners/carousel-banner-1.png",
        "/images/banners/carousel-banner-2.jpg",
        "/images/banners/carousel-banner-3.jpg"
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
        "/images/banners/nutrition-banner.jpg",
        "/images/banners/bed-bath-banner.jpg",
        "/images/banners/beauty-banner.jpg",
        "/images/banners/toy-banner.jpg"
    ],
    productsShowcaseTitle1: "Continue Comprando",
    products1: [
        {
            image: "/images/products/D_NQ_NP_624383-MLB47345286826_092021-W-removebg-preview.png",
            name: "Snack Petiscão Palito",
            price: "R$ 19.90"
        },
        {
            image: "/images/products/fornecedores-produtos-pet-shop-01-removebg-preview.png",
            name: "Casinha Pet Rosa",
            price: "R$ 119.90"
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        }
    ],
    productsShowcaseTitle2: "Produtos Recomendados",
    products2: [
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
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
    videoShowcaseTitle: "Pet Store Ensina",
    videoShowcaseContent: {

    },
    promotionTimer: {},
    promotionProducts: [{}],
    productsShowcaseTitle3: "Mais vendidos no momento",
    products3: [
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        },
        {
            image: "",
            name: "Snack Petiscão Palito",
            price: 19.90
        }
    ],
    brandsShowcaseTitle2: "Marcas Mais Vendidas",
    brands2: [

    ],
}

const mainController = {
    home: (req, res) => {
        res.render('home2', {
            title: homeProperties.homeTitle,
            bannerImages: homeProperties.bannerImages,
            features: homeProperties.features,
            categoriesTitles: homeProperties.categoriesTitles,
            categoriesImages: homeProperties.categoriesImages,
            productsShowcaseTitle1: homeProperties.productsShowcaseTitle1,
            products1: homeProperties.products1,
            productsShowcaseTitle2: homeProperties.productsShowcaseTitle2,
            products2: homeProperties.products2,
            brandsShowcaseTitle1: homeProperties.brandsShowcaseTitle1,
            brands1: homeProperties.brands1
        });
    }
}
module.exports = mainController
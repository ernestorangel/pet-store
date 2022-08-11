module.exports = (sequelize, DataTypes) => {
    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'Product';

    let cols = {
        id_product:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_brand:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(150),
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL(6,2),
            allowNull: false
        }     
    };

    let config = {
        tableName: 'products',
        timestamps: false        
    };

    let Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {
        Product.belongsToMany(models.Order, {
            foreignKey: 'id_product',
            as: 'order',
            through: models.Product_in_order,            
            timestamps: false
        });

        Product.belongsToMany(models.User, {
            as: 'products',
            through: 'cart',
            foreignKey: 'id_product',
            timestamps: false,
        });

        Product.belongsToMany(models.User, {
            as: 'continue_buy_product',
            through: 'continue_buy',
            foreignKey: 'id_product',
            timestamps: false,
        });

        Product.belongsToMany(models.User, {
            as: 'recommended_product',
            through: 'recommended',
            foreignKey: 'id_product',
            timestamps: false,
        });

        Product.belongsToMany(models.Category,{
            as: 'category',
            through: 'categories_of_product',
            foreignKey: 'id_product',
            timestamps: false
        });

        Product.belongsTo(models.Brand,{
            as: 'brand',
            foreignKey: 'id_brand',
            timestamps: false
        });

        Product.belongsToMany(models.Product_images,{
            as: 'id_images',
            through: 'images_of_product',
            foreignKey: 'id_product',
            timestamps: false
        });
    }
    

    return Product
}
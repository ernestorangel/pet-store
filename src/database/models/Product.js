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
        id_category:{
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
        },
        img:{
            type: DataTypes.STRING(45),
            allowNull: true
        }        
    };

    let config = {
        tableName: 'products',
        timestamps: false        
    };

    let Product = sequelize.define(alias, cols, config)

    Product.associate = (models) => {
        Product.belongsToMany(models.Order, {
            as: 'order',
            through: 'products_in_orders',
            foreignKey: 'id_product',
            otherKey: 'id_order',
            timesstamps: false
        });

        Product.belongsToMany(models.User, {
            through: 'cart',
            foreignKey: 'id_user',
            timestamps: false
        });

        Product.belongsTo(models.Category,{
            foreignKey: 'id_category',
            timestamps: false
        });

        Product.belongsTo(models.Brand,{
            foreignKey: 'id_brand',
            timestamps: false
        });

        Product.hasMany(models.Product_image,{
            foreignKey: 'id_product',
            timestamps: false
        });
    }
    

    return Product
}
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
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(150),
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL(10,0),
            allowNull: false
        },        
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
        })
    }
    

    return Product
}
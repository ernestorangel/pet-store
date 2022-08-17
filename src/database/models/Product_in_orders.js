module.exports = (sequelize, DataTypes) => {   
    
    let alias = 'Product_in_order'; // nome da tabela

    let cols = {  // nome das colunas
        id_product: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        id_order: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        product_qtd:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
    };

    let config = {   // configurações da tabela
        tableName: 'products_in_orders',
        timestamps: false
    };

    let Product_in_order = sequelize.define(alias, cols, config)

    
    return Product_in_order
}
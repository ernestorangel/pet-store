module.exports = (sequelize, DataTypes) => {   
    
    let alias = 'Categories_of_product'; // nome da tabela

    let cols = {  // nome das colunas
        id_product: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        id_category: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }        
    };

    let config = {   // configurações da tabela
        tableName: 'categories_of_product',
        timestamps: false
    };

    let Categories_of_product = sequelize.define(alias, cols, config)

    Categories_of_product.associate = (models) => {
        Categories_of_product.hasMany(models.Product, {
            foreignKey: 'id_product',
            timestamps: false
        });

        Categories_of_product.hasMany(models.Category, {
            foreignKey: 'id_category',
            timestamps: false
        });   
    }

    return Categories_of_product
}
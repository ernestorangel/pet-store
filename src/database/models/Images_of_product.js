module.exports = (sequelize, DataTypes) => {   
    
    let alias = 'Images_of_product'; // nome da tabela

    let cols = {  // nome das colunas
        id_image: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        id_product: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }        
    };

    let config = {   // configurações da tabela
        tableName: 'images_of_product',
        timestamps: false
    };

    let Images_of_product= sequelize.define(alias, cols, config)

    Images_of_product.associate = (models) => {
        Images_of_product.hasMany(models.Product_images, {
            as: 'images',
            foreignKey: 'id_image',
            timestamps: false
        });

        Images_of_product.hasMany(models.Product, {
            as: 'id_images',
            foreignKey: 'id_product',
            timestamps: false
        });
    };

    return Images_of_product;
};
module.exports = (sequelize, DataTypes) => {
    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'Product_images';

    let cols = {
        id_image:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },     
        img:{
            type: DataTypes.STRING(45),
            allowNull: true
        }        
    };

    let config = {
        tableName: 'product_images',
        timestamps: false        
    };

    let Product_images = sequelize.define(alias, cols, config);  

    Product_images.associate = (models) => {
        Product_images.belongsTo(models.Product, {
            as: 'images',
            through: 'Images_of_product',
            foreignKey: 'id_image',
            timestamps: false
        });
    };

    return Product_images;
}
module.exports = (sequelize, DataTypes) => {
    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'Product_image';

    let cols = {
        id_image:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_product:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },        
        name:{
            type: DataTypes.STRING(100),
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

    let Product_image = sequelize.define(alias, cols, config)   

    Product_image.associate = (models) => {
        Product_image.belongsTo(models.Product, {
            foreignKey: 'id_product',
            timestamps: false
        });        
    }    

    return Product_image
}
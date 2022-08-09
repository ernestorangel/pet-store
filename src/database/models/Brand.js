module.exports = (sequelize, DataTypes) => {
    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'Brand';

    let cols = {
        id_brand:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },        
        name:{
            type: DataTypes.STRING(150),
            allowNull: false
        },         
    };

    let config = {
        tableName: 'brand',
        timestamps: false
    };

    let Brand = sequelize.define(alias, cols, config)

    Brand.associate = (models) => {
        Brand.hasMany(models.Product, {
            foreignKey: 'id_brand',
            timestamps: false
        });        
    }

    return Brand
}
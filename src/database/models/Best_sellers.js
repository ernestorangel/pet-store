module.exports = (sequelize, DataTypes) => {
    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'BestSellers';

    let cols = {
        id_best_sellers:{
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
            type: DataTypes.STRING(100),
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL(6,2),
            allowNull: false
        },
        img:{
            type: DataTypes.STRING(100),
            allowNull: true
        }        
    };

    let config = {
        tableName: 'best_sellers',
        timestamps: false
    };

    let BestSellers = sequelize.define(alias, cols, config)

        

    return BestSellers
}
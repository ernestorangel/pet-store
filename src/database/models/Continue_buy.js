module.exports = (sequelize, DataTypes) => {   
    
    let alias = 'Continue_buy'; // nome da tabela

    let cols = {  // nome das colunas
        id_user: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        id_product: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false
        }        
    };

    let config = {   // configurações da tabela
        tableName: 'continue_buy',
        timestamps: false
    };

    let Continue_buy = sequelize.define(alias, cols, config)

    Continue_buy.associate = (models) => {
        Continue_buy.hasMany(models.User, {
            foreignKey: 'id_user',
            timestamps: false
        });

        Continue_buy.hasMany(models.Product, {
            foreignKey: 'id_product',
            timestamps: false
        });   
    };

    return Continue_buy
};
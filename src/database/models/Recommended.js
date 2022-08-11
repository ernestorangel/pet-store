module.exports = (sequelize, DataTypes) => {   
    
    let alias = 'Recommended'; // nome da tabela

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
        tableName: 'recommended',
        timestamps: false
    };

    let Recommended = sequelize.define(alias, cols, config)

    Recommended.associate = (models) => {
        Recommended.hasMany(models.User, {
            foreignKey: 'id_user',
            timestamps: false
        });

        Recommended.hasMany(models.Product, {
            foreignKey: 'id_product',
            timestamps: false
        });   
    };

    return Recommended
};
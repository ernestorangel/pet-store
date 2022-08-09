module.exports = (sequelize, DataTypes) => {
    let alias = 'Cart'; // nome da tabela

    let cols = { //nome das colunas
        // id_cart: {
        //     type: DataTypes.INTEGER(11),
        //     primaryKey: true,
        //     allowNull: false
        // },
        id_product: {
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            allowNull: false
        },
        id_user: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        qtd: {
            type: DataTypes.INTEGER(11),
            allowNull: false
        }
    };

    let config = { // Configuracoes da tabela
        tableName: 'cart',
        timestamps: false        
    };

    let Cart = sequelize.define(alias, cols, config);

    Cart.associate = (models) => {

        Cart.hasMany(models.User, {
            as: 'users',
            foreignKey: 'id_user',
            timestamps: false
        });

        Cart.hasMany(models.Product, {
            as: 'products',
            foreignKey: 'id_product',
            timestamps: false
        });

    };

    return Cart;
}
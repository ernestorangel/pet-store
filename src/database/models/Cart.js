module.exports = (sequelize, DataTypes) => {
    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'Cart';

    let cols = {
        id_cart:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        description:{
            type: DataTypes.STRING(150),
            allowNull: false
        },
        price:{
            type: DataTypes.DECIMAL(10,0),
            allowNull: false
        },
        img:{
            type: DataTypes.STRING(45),
            allowNull: true
        }        
    };

    let config = {
        tableName: 'cart',
        timestamps: false        
    };

    let Cart = sequelize.define(alias, cols, config)

        

    return Cart
}
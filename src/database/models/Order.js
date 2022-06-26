module.exports = (sequelize, DataTypes) => {
    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'Order';

    let cols = {
        id_order:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_user:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        id_adress:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        update_at:{
            type: DataTypes.DATE,
            allowNull: true            
        },
        create_at:{
            type: DataTypes.DATE,
            allowNull: true
        },
        total:{
            type: DataTypes.DECIMAL(10,0)
        }
    };

    let config = {
        tableName: 'orders',
        timestamps: false        
    };

    let Order = sequelize.define(alias, cols, config)
    

    return Order
}
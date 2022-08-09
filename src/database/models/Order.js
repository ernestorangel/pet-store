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
        updated_at:{
            type: DataTypes.DATE,
            allowNull: true            
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: true
        },
        shipping:{
            type: DataTypes.DECIMAL(6,2),
            allowNull: true
        },
        total:{
            type: DataTypes.DECIMAL(6,2)
        }
    };

    let config = {
        tableName: 'orders',
        timestamps: false        
    };

    let Order = sequelize.define(alias, cols, config)

    Order.associate = (models) => {
        Order.belongsToMany(models.Product, {
            as: 'product',
            through: 'products_in_orders',
            foreignKey: 'id_order',
            otherKey: 'id_product',
            timestamps: false
        })
    }
    

    return Order
}
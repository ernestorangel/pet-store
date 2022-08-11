module.exports = (sequelize, DataTypes) => {
    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'User';

    let cols = {
        id_user:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        first_name:{
            type: DataTypes.STRING(50),
            allowNull: false
        },
        last_name:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        email:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        password:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        avatar:{
            type: DataTypes.STRING(45),
            allowNull: true
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false        
    };

    let User = sequelize.define(alias, cols, config)

    User.associate = (models) =>{
        User.hasMany(models.Adress, {
            foreignKey: 'id_user',
            as: 'adress'
        });

        User.belongsToMany(models.Product, {
            as: 'cart_user',
            through: 'cart',
            foreignKey: 'id_user',
            timestamps: false,
        });

        User.belongsToMany(models.Product, {
            as: 'continue_buy_user',
            through: 'continue_buy',
            foreignKey: 'id_user',
            timestamps: false,
        });

        User.belongsToMany(models.Product, {
            as: 'recommended_user',
            through: 'recommended',
            foreignKey: 'id_user',
            timestamps: false,
        });
    }
    return User
}
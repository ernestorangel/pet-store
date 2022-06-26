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
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false        
    };

    let User = sequelize.define(alias, cols, config)
    

    return User
}
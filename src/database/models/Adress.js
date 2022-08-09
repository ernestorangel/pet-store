module.exports = (sequelize, DataTypes) => {
    // let alias = nome da tabela
    // let cols = nome das colunas
    // let config = configurações da tabela
    let alias = 'Adress';

    let cols = {
        id_adress:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        id_user:{
            type: DataTypes.INTEGER(11),
            allowNull: false
        },
        neighborhood:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        city:{
            type: DataTypes.STRING(100),
            allowNull: false
        },
        street:{
            type: DataTypes.STRING(100),
        },
        street_number:{
            type: DataTypes.DECIMAL(6,2),
            allowNull: false
        },
        is_current:{
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        update_at:{
            type: DataTypes.DATE,
            allowNull: true
        },
        created_at:{
            type: DataTypes.DATE,
            allowNull: true
        }
    };

    let config = {
        tableName: 'users',
        timestamps: false        
    };

    let Adress = sequelize.define(alias, cols, config)

    Adress.associate = (models) => {
        Adress.belongsTo(models.User, {
            foreignKey: 'id_user',
            as: 'user'
        })
    }
    

    return Adress
}
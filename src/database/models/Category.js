module.exports = (sequelize, DataTypes) => {   
    
    let alias = 'Category'; // nome da tabela

    let cols = {  // nome das colunas
        id_category:{
            type: DataTypes.INTEGER(11),
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },        
        name:{
            type: DataTypes.STRING(100),
            allowNull: false
        } 
    };

    let config = {   // configurações da tabela
        tableName: 'category',
        timestamps: false
    };

    let Category = sequelize.define(alias, cols, config)

    Category.associate = (models) => {
        Category.hasMany(models.Product, {
            foreignKey: 'id_category',
            timestamps: false
        });        
    }

    return Category
}
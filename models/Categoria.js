module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define(
      'Categoria',
      {
        nome: DataType.STRING,
      },
      {
        tableName: 'categorias',
        timestamps: false,
      }
    );
  
    Categoria.associate = (models) => {
      //m:n produtos enviando fk
      Categoria.belongsToMany(models.Produto, {
        as: 'produtos',
        through: 'produtos_categorias',
        foreignKey: 'categorias_id',
        otherKey: 'produtos_id',
        timestamps: false,
      });
    };
  
    return Categoria;
  };
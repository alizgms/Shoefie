module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define(
    'Categoria',
    {
      nome: DataTypes.STRING,
    },
    {
      tableName: 'categorias',
      timestamps: false,
    }
  );

  Categoria.associate = (models) => {
    //link com Pedidos
    Categoria.hasMany(models.Produto, {
      as: 'categoria',
      foreignKey: 'produtos_id',
    });
  };

  return Categoria;
};

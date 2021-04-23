module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    'Produto',
    {
      nome: DataTypes.STRING,
      preco: DataTypes.DECIMAL,
      qtdEstoque: DataTypes.INTEGER,
      imagem: DataTypes.STRING,
    },
    {
      tableName: 'produtos',
      timestamps: false,
    }
  );

  Produto.associate = (models) => {
    //pedido id
    Produto.belongsToMany(models.Pedido, {
      as: 'pedidos',
      through: 'itens_pedidos',
      foreignKey: 'produtos_id',
      timestamp: false,
    });
    //link 1:n categoria
    Produto.hasMany(models.Categoria, {
      as: 'categoria',
      foreignKey: 'produtos_id',
    });
  };

  return Produto;
};

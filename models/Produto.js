module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define(
    'Produto',
    {
      nome: DataType.STRING,
      preco: DataType.DECIMAL,
    },
    {
      tableName: 'produtos',
      timestamp: false,
    }
  );

  Produto.associate = (models) => {
    //pedido id
    Produto.belongsToMany(models.Pedido, {
      as: 'produto',
      through: 'Pedido_Produto',
      foreignKey: 'produtos_id',
      otherKey: 'pedidos_id',
      timestamp: false,
    });

    Produto.hasMany(models.Pedido_Produto, { as: 'qtdproduto' });
  };

  return Produto;
};

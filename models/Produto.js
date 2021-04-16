module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define(
    'Produto',
    {
      nome: DataType.STRING,
      preco: DataType.DECIMAL,
    },
    {
      tableName: 'produtos',
      timestamps: false,
    }
  );

  Produto.associate = (models) => {
    //pedido id
    Produto.belongsToMany(models.Pedido, {
      as: 'produto',
      through: 'pedidos_produtos',
      foreignKey: 'produtos_id',
      otherKey: 'pedidos_id',
      timestamp: false,
    });
  };

  return Produto;
};

module.exports = (sequelize, DataType) => {
  const Pedido_Produto = sequelize.define(
    'Pedido_Produto',
    {
      qtdProdutos: DataType.INTEGER,
      pedidos_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        primaryKey: true,
      },
      produtos_id: {
        type: DataTypes.INTEGER,
        foreignKey: true,
        primaryKey: true,
      },
    },
    {
      tableName: 'pedidos_produtos',
      timestamp: false,
    }
  );

  Pedido_Produto.associate = (models) => {
    Pedido_Produto.belongsTo(models.Pedido, {
      as: 'pedido_produto',
      foreignKey: 'pedidos_id',
    });

    Pedido_Produto.belongsTo(models.Produto, {
      as: 'pedido_produto',
      foreignKey: 'produtos_id',
    });
  };
};

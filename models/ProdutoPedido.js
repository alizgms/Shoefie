module.exports = (sequelize, DataType) => {
  const ProdutoPedido = sequelize.define(
    'ProdutoPedido',
    {
      qtdProduto: DataType.INTEGER,
      produtos_id: {
        type: DataType.INTEGER,
        foreignKey: true,
        primaryKey: true,
      },
      pedidos_id: {
        type: DataType.INTEGER,
        foreignKey: true,
        primaryKey: true,
      },
      
    },
    {
      tableName: 'produtos_pedidos',
      timestamps: false,
    }
  );
  ProdutoPedido.associate = (models) => {
    ProdutoPedido.belongsTo(models.Produto, {
      as: 'produtos',
      foreignKey: 'produtos_id',
    });
    
    ProdutoPedido.belongsTo(models.Pedido, {
      as: 'pedidos',
      foreignKey: 'pedidos_id',
    });
    
  };

  return ProdutoPedido;
};

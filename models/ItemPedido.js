module.exports = (sequelize, DataTypes) => {
  const ItemPedido = sequelize.define(
    'ItemPedido',
    {
      qtdRequisitado: DataTypes.INTEGER,
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
      tableName: 'itens_pedidos',
      timestamps: false,
    }
  );
  ItemPedido.associate = (models) => {
    ItemPedido.belongsTo(models.Pedido, {
      as: 'pedidos',
      foreignKey: 'pedidos_id',
    });

    ItemPedido.belongsTo(models.Produto, {
      as: 'produtos',
      foreignKey: 'produtos_id',
    });
  };

  return ItemPedido;
};

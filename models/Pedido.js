module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define(
    'Pedido',
    {
      valor: DataType.DECIMAL,
      statusPedido: DataType.INTEGER,
    },
    {
      tableName: 'pedidos',
      timestamp: false,
    }
  );

  Pedido.associate = (models) => {
    //link com Clientes
    Pedido.belongsTo(models.Cliente, {
      as: 'pedido',
      foreignKey: 'clientes_id',
    });
    //pagamentos id
    Pedido.hasOne(models.Pagamento, {
      as: 'pagamento',
      foreignKey: 'pedidos_id',
    });
    //cliente id de pagamentos
    Pedido.hasOne(models.Pagamento, {
      as: 'clienteid',
      foreignKey: 'pedidos_clientes_id',
    });
    //produtos id
    Pedido.belongsToMany(models.Produto, {
      as: 'produto',
      through: 'pedidos_produtos',
      foreignKey: 'pedidos_id',
      otherKey: 'produtos_id',
      timestamp: false,
    });

    Pedido.hasMany(models.Pedido_Produto, {
      as: 'pedidos_produtos',
      foreignKey: 'pedidos_id',
    });
  };

  return Pedido;
};

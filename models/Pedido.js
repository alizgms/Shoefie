module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define(
    'Pedido',
    {
      valor: DataType.DECIMAL,
      statusPedido: DataType.TINYINT,
      codigoBoleto: DataType.STRING,
      statusBoleto: DataType.TINYINT,
      dataVencimento: DataType.DATE,
    },
    {
      tableName: 'pedidos',
      timestamps: false,
    }
  );

  Pedido.associate = (models) => {
    //link com Clientes
    Pedido.belongsTo(models.Cliente, {
      as: 'pedido',
      foreignKey: 'clientes_id',
    });
    //produtos id
    Pedido.belongsToMany(models.Produto, {
      as: 'produtos',
      through: 'itens_pedidos',
      foreignKey: 'pedidos_id',
      timestamps: false,
    });
  };

  return Pedido;
};

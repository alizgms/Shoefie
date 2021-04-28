module.exports = (sequelize, DataType) => {
  const Pedido = sequelize.define(
    'Pedido',
    {
      valor: DataType.DECIMAL,
      statusPedido: DataType.STRING,
      codigoBoleto: DataType.INTEGER,
      statusBoleto: DataType.STRING,
      dataVencimento: DataType.DATE,
    },
    {
      tableName: 'pedidos',
      timestamps: false,
    }
  );

  Pedido.associate = (models) => {
    // n:1 usuario recebendo fk
    Pedido.belongsTo(models.Usuario, {
      as: 'usuarios',
      foreignKey: 'usuarios_id',
    });
    // n:m produto enviando fk
    Pedido.belongsToMany(models.Produto, {
      as: 'produtos',
      through: 'produtos_pedidos',
      foreignKey: 'pedidos_id',
      otherKey: 'produtos_id',
      timestamps: false,
    });
  };

  return Pedido;
};

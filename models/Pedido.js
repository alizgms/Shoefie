module.exports = (sequelize, DataTypes) => {
  const Pedido = sequelize.define(
    'Pedido',
    {
      valor: DataTypes.DECIMAL,
      statusPedido: DataTypes.TINYINT,
      codigoBoleto: DataTypes.STRING,
      statusBoleto: DataTypes.TINYINT,
      dataVencimento: DataTypes.DATE,
    },
    {
      tableName: 'pedidos',
      timestamps: false,
    }
  );

  Pedido.associate = (models) => {
    //link com Clientes
    Pedido.belongsTo(models.Login, {
      as: 'pedido',
      foreignKey: 'login_id',
    });
    //produtos id
    Pedido.belongsToMany(models.ItemPedido, {
      as: 'produtos',
      through: 'itens_pedidos',
      foreignKey: 'pedidos_id',
      timestamps: false,
    });
  };

  return Pedido;
};

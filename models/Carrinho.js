module.exports = (sequelize, DataTypes) => {
  const Carrinho = sequelize.define(
    'Carrinho',
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
      tableName: 'carrinhos',
      timestamps: false,
    }
  );
  Carrinho.associate = (models) => {
    Carrinho.belongsTo(models.Pedido, {
      as: 'pedidos',
      through: 'carrinhos',
      foreignKey: 'pedidos_id',
    });

    Carrinho.belongsTo(models.Produto, {
      as: 'produtos',
      through: 'carrinhos',
      foreignKey: 'produtos_id',
    });
  };

  return Carrinho;
};

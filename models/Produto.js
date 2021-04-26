module.exports = (sequelize, DataTypes) => {
  const Produto = sequelize.define(
    'Produto',
    {
      nome: DataTypes.STRING,
      preco: DataTypes.DECIMAL,
      qtdEstoque: DataTypes.INTEGER,
      imagem: DataTypes.STRING,
    },
    {
      tableName: 'produtos',
      timestamps: false,
    }
  );

  Produto.associate = (models) => {
    //pedido id
    Produto.belongsToMany(models.Pedido, {
      as: 'pedidos',
      through: 'itens_pedidos',
      foreignKey: 'produtos_id',
      otherKey: 'pedidos_id',
      timestamps: false,
    });
  };

  return Produto;
};

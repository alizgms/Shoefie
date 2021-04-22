module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define(
    'Produto',
    {
      nome: DataType.STRING,
      preco: DataType.DECIMAL,
      qtdEstoque: DataType.INTEGER,
      imagem: DataType.STRING,
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
      timestamp: false,
    });
    //link 1:n categoria
    Produto.hasMany(models.Categoria, {as: 'categoria', foreignKey: 'produtos_id'});
  };

  return Produto;
};

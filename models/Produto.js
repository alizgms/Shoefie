module.exports = (sequelize, DataType) => {
  const Produto = sequelize.define(
    'Produto',
    {
      nome: DataType.STRING,
      preco: DataType.DECIMAL,
      qtdEstoque: DataType.INTEGER,
      imagem: DataType.BLOB,
    },
    {
      tableName: 'produtos',
      timestamps: false,
    }
  );

  Produto.associate = (models) => {
    //m:n com pedidos enviando fk
    Produto.belongsToMany(models.Pedido, {
      as: 'pedidos',
      through: 'produtos_pedidos',
      foreignKey: 'produtos_id',
      otherKey: 'pedidos_id',
      timestamps: false,
    });
    //n:m com categoria enviando fk
    Produto.belongsToMany(models.Categoria, {
      as: 'categorias',
      through: 'produtos_categorias',
      foreignKey: 'produtos_id',
      otherKey: 'categorias_id',
      timestamps: false,
    });
  };

  return Produto;
};

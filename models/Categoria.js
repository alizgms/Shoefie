module.exports = (sequelize, DataType) => {
    const Categoria = sequelize.define(
      'Categoria',
      {
        nome: DataType.STRING,
      },
      {
        tableName: 'categorias',
        timestamps: false,
      }
    );
  
    Categoria.associate = (models) => {
      //link com Pedidos
      Categoria.hasMany(models.Pedido, { as: 'categoria', foreignKey: 'produtos_id' });
    };
  
    return Categoria;
  };
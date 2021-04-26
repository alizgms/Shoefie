<<<<<<< HEAD
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
      Categoria.hasMany(models.Produto, { as: 'categoria', foreignKey: 'produtos_id' });
    };
  
    return Categoria;
  };
=======
module.exports = (sequelize, DataTypes) => {
  const Categoria = sequelize.define(
    'Categoria',
    {
      nome: DataTypes.STRING,
    },
    {
      tableName: 'categorias',
      timestamps: false,
    }
  );

  Categoria.associate = (models) => {
    //link com Pedidos
    Categoria.hasMany(models.Produto, {
      as: 'categoria',
      foreignKey: 'produtos_id',
    });
  };

  return Categoria;
};
>>>>>>> 415f314f8d83f379e303872cfdd40c67f3d87bb2

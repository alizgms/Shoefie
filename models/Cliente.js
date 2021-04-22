module.exports = (sequelize, DataType) => {
  const Cliente = sequelize.define(
    'Cliente',
    {
      nome: DataType.STRING,
      email: DataType.STRING,
      senha: DataType.STRING,
    },
    {
      tableName: 'clientes',
      timestamps: false,
    }
  );

  Cliente.associate = (models) => {
    //link com Pedidos
    Cliente.hasMany(models.Pedido, { as: 'pedido', foreignKey: 'clientes_id' });

    Cliente.hasOne(models.Endereco, { as: 'endereco', foreignKey: 'clientes_id' });
  };

  return Cliente;
};

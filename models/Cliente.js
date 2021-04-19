module.exports = (sequelize, DataType) => {
  const Cliente = sequelize.define(
    'Cliente',
    {
      nome: DataType.STRING,
      email: DataType.STRING,
      senha: DataType.STRING,
      cpf: DataType.DECIMAL,
      uf: DataType.STRING,
      cidade: DataType.STRING,
      endereco: DataType.STRING,
      cep: DataType.DECIMAL,
    },
    {
      tableName: 'clientes',
      timestamps: false,
    }
  );

  Cliente.associate = (models) => {
    //link com Pedidos
    Cliente.hasMany(models.Pedido, { as: 'pedido', foreignKey: 'clientes_id' });
  };

  return Cliente;
};

module.exports = (sequelize, DataType) => {
  const Endereco = sequelize.define(
    'Endereco',
    {
      nome: DataType.STRING,
      endereco: DataType.STRING,
      cpf: DataType.DECIMAL,
      cep: DataType.DECIMAL,
      estado: DataType.STRING,
      cidade: DataType.STRING,
    },
    {
      tableName: 'cadastroenvios',
      timestamp: false,
    }
  );

  Endereco.associate = (models) => {
    //link com Clientes
    Endereco.belongsTo(models.Cliente, {
      as: 'endereco',
      foreignKey: 'clientes_id',
    });
  };

  return Endereco;
};

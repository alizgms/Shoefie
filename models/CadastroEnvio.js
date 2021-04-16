module.exports = (sequelize, DataType) => {
  const CadastroEnvio = sequelize.define(
    'CadastroEnvio',
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

  CadastroEnvio.associate = (models) => {
    //link com Clientes
    CadastroEnvio.belongsTo(models.Cliente, {
      as: 'endereco',
      foreignKey: 'clientes_id',
    });
  };

  return CadastroEnvio;
};

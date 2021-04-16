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
      timestamps: false,
    }
  );

  CadastroEnvio.associate = (models) => {
    //link com Clientes
    CadastroEnvio.belongsTo(models.Cliente, {
      as: 'logradouro',
      foreignKey: 'clientes_id',
    });
  };

  return CadastroEnvio;
};

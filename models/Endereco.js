module.exports = (sequelize, DataType) => {
    const Endereco = sequelize.define(
      'Endereco',
      {
        cpf: DataType.DECIMAL,
        uf: DataType.STRING,
        cidade: DataType.STRING,
        endereco: DataType.STRING,
        cep: DataType.DECIMAL,
      },
      {
        tableName: 'enderecos',
        timestamps: false,
      }
    );
  
    Endereco.associate = (models) => {
      //link com Cliente
      Endereco.hasOne(models.Cliente, { as: 'endereco', foreignKey: 'clientes_id' });
    };
  
    return Endereco;
};
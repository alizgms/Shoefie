module.exports = (sequelize, DataType) => {
  const Cadastro = sequelize.define(
    'Cadastro',
    {
      nome: DataType.STRING,
      cpf: DataType.DECIMAL,
      cep: DataType.DECIMAL,
      uf: DataType.STRING,
      cidade: DataType.STRING,
      endereco: DataType.STRING,
    },
    {
      tableName: 'cadastros',
      timestamps: false,
    }
  );

  Cadastro.associate = (models) => {
    //1:1 com usuario recebendo fk
    Cadastro.belongsTo(models.Usuario, {
      as: 'cadastros',
      foreignKey: 'usuarios_id',
    });
  };

  return Cadastro;
};

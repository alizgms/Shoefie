module.exports = (sequelize, DataTypes) => {
  const Cadastro = sequelize.define(
    'Cadastro',
    {
      nome: DataTypes.STRING,
      cpf: DataTypes.STRING,
      uf: DataTypes.STRING,
      cidade: DataTypes.STRING,
      endereco: DataTypes.STRING,
      cep: DataTypes.STRING,
    },
    {
      tableName: 'cadastro',
      timestamps: false,
    }
  );

  Cadastro.associate = (models) => {
    //link com Cliente
    Cadastro.hasOne(models.Login, {
      as: 'cadastro',
      foreignKey: 'login_id',
    });
  };

  return Cadastro;
};

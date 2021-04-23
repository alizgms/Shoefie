module.exports = (sequelize, DataType) => {
  const Login = sequelize.define(
    'Login',
    {
      nome: DataType.STRING,
      email: DataType.STRING,
      senha: DataType.STRING,
    },
    {
      tableName: 'login',
      timestamps: false,
    }
  );

  Login.associate = (models) => {
    //link com Pedidos
    Login.hasMany(models.Pedido, { as: 'pedido', foreignKey: 'login_id' });

    Login.hasOne(models.Cadastro, {
      as: 'cadastro',
      foreignKey: 'login_id',
    });
  };

  return Login;
};

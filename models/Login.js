module.exports = (sequelize, DataTypes) => {
  const Login = sequelize.define(
    'Login',
    {
      nome: DataTypes.STRING,
      email: DataTypes.STRING,
      senha: DataTypes.STRING,
      isLogged: DataTypes.BOOLEAN,
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
